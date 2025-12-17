import { useCallback, useState } from "react"

import { DEFAULT_SETTINGS, type Settings } from "@/contexts/settingsContext"

const SETTINGS_STORAGE_KEY = "akaalforge-settings"
const THEME_STORAGE_KEY = "vite-ui-theme"

const readInitialSettings = (): Settings => {
  if (typeof window === "undefined") return DEFAULT_SETTINGS

  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY)
    const parsed = raw ? (JSON.parse(raw) as Partial<Settings>) : null

    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Settings["mode"] | null

    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
      mode: (parsed?.mode ?? storedTheme ?? DEFAULT_SETTINGS.mode) as Settings["mode"],
      theme: {
        ...DEFAULT_SETTINGS.theme,
        ...(parsed?.theme ?? {}),
        styles: {
          ...DEFAULT_SETTINGS.theme.styles,
          ...(parsed?.theme?.styles ?? {}),
        },
      },
    }
  } catch {
    return DEFAULT_SETTINGS
  }
}

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(() => readInitialSettings())

  const updateSettings = useCallback((nextSettings: Settings) => {
    setSettings(nextSettings)

    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(nextSettings))
    } catch {
      // ignore storage errors
    }
  }, [])

  return { settings, updateSettings }
}
