import { Moon, Sun } from "lucide-react";

import { Button } from "@base/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@base/ui/components/dropdown-menu";
import { Separator } from "@base/ui/components/separator";
import { useTheme } from "@base/ui/components/theme-provider";
import {
  type ThemeName,
  setThemeColorVariables,
  setThemeMode,
} from "@base/ui/themes";
import { useState } from "react";

export function ModeToggle() {
  const [current, setCurrent] = useState<ThemeName>("clay");
  const { setTheme } = useTheme();

  //TODO: have this visually swap modes
  //TODO: currently have to swap modes then can see new mode
  const handleSetMode = (mode: "light" | "dark" | "system") => {
    setTheme(mode);
    setThemeMode(mode);
    setThemeColorVariables(current);
  };

  const handleSetColor = (name: ThemeName) => {
    setThemeColorVariables(name);
    setCurrent(name);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleSetMode("light")}>
          Light
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleSetMode("dark")}>
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleSetMode("system")}>
          System
        </DropdownMenuItem>

        <Separator />

        <DropdownMenuItem onClick={() => handleSetColor("clay")}>
          Clay
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleSetColor("default")}>
          Default
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleSetColor("nature")}>
          Nature
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleSetColor("notebook")}>
          Notebook
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
