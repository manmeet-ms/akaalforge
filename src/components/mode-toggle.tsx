"use client";

import { useTheme } from "@/components/theme-provider";
import { ThemeToggleButton, useThemeTransition } from "@/components/ui/theme-toggle-button";
import type { Mode } from "@/contexts/settingsContext";
import { useSettings } from "@/hooks/useSettings";
import React, { useCallback, useEffect, useState } from "react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { settings, updateSettings } = useSettings();
  const { startTransition } = useThemeTransition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resolvedTheme: "light" | "dark" = theme === "system" ? (typeof document !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light") : theme;

  const handleThemeToggle = useCallback(() => {
    const newMode: Mode = resolvedTheme === "dark" ? "light" : "dark";

    startTransition(() => {
      const updatedSettings = {
        ...settings,
        mode: newMode,
        theme: {
          ...settings.theme,
          styles: {
            light: settings.theme.styles?.light || {},
            dark: settings.theme.styles?.dark || {},
          },
        },
      };
      updateSettings(updatedSettings);
      setTheme(newMode);
    });
  }, [resolvedTheme, settings, updateSettings, setTheme, startTransition]);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex items-center justify-center gap-8 ">
      {/* Circle blur animation */}
        <ThemeToggleButton theme={resolvedTheme} onClick={handleThemeToggle} variant="circle-blur" start="top-right" />


      {/* Circle animation */}
      {/* <div className="flex flex-col items-center gap-3">
        <ThemeToggleButton 
          theme={resolvedTheme}
          onClick={handleThemeToggle}
          variant="circle"
          start="center"
        />
        <div className="text-center">
          <span className="text-xs font-medium">Circle</span>
          <p className="text-xs text-muted-foreground">Expanding circle</p>
        </div>
      </div> */}
      {/* Polygon animation */}
      {/* <div className="flex flex-col items-center gap-3">
        <ThemeToggleButton 
          theme={resolvedTheme}
          onClick={handleThemeToggle}
          variant="polygon"
        />
        <div className="text-center">
          <span className="text-xs font-medium">Polygon</span>
          <p className="text-xs text-muted-foreground">Diagonal wipe</p>
        </div>
      </div> */}

      {/* GIF animation */}
      {/* <div className="flex flex-col items-center gap-3">
        <ThemeToggleButton 
          theme={resolvedTheme}
          onClick={handleThemeToggle}
          variant="gif"
          url="https://media.giphy.com/media/KBbr4hHl9DSahKvInO/giphy.gif?cid=790b76112m5eeeydoe7et0cr3j3ekb1erunxozyshuhxx2vl&ep=v1_stickers_search&rid=giphy.gif&ct=s"
        />
        <div className="text-center">
          <span className="text-xs font-medium">GIF Mask</span>
          <p className="text-xs text-muted-foreground">Custom animation</p>
        </div>
      </div> */}
    </div>
  );
};

export default ModeToggle;

// import { Moon, Sun } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { useTheme } from "@/components/theme-provider"

// export function ModeToggle() {
//   const { setTheme } = useTheme()

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" size="icon">
//           <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
