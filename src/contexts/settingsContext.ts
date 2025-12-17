export type Mode = "light" | "dark" | "system"

export type ThemeStyles = {
  light?: Record<string, unknown>
  dark?: Record<string, unknown>
}

export type Settings = {
  mode: Mode
  theme: {
    styles?: ThemeStyles
  }
}

export const DEFAULT_SETTINGS: Settings = {
  mode: "system",
  theme: {
    styles: {
      light: {},
      dark: {},
    },
  },
}
