// 1. Define the possible theme names and modes
export type ThemeName = "clay" | "default" | "nature" | "notebook";

// 2. Define a type for the CSS variables
// This lists all variables found across all themes for type safety
interface ThemeVariables {
  // Colors
  "--background": string;
  "--foreground": string;
  "--card": string;
  "--card-foreground": string;
  "--popover": string;
  "--popover-foreground": string;
  "--primary": string;
  "--primary-foreground": string;
  "--secondary": string;
  "--secondary-foreground": string;
  "--muted": string;
  "--muted-foreground": string;
  "--accent": string;
  "--accent-foreground": string;
  "--destructive": string;
  "--destructive-foreground": string;
  "--border": string;
  "--input": string;
  "--ring": string;
  "--chart-1": string;
  "--chart-2": string;
  "--chart-3": string;
  "--chart-4": string;
  "--chart-5": string;
  "--sidebar"?: string; // Optional, not present in all themes
  "--sidebar-foreground"?: string; // Optional
  "--sidebar-primary"?: string; // Optional
  "--sidebar-primary-foreground"?: string; // Optional
  "--sidebar-accent"?: string; // Optional
  "--sidebar-accent-foreground"?: string; // Optional
  "--sidebar-border"?: string; // Optional
  "--sidebar-ring"?: string; // Optional

  // Typography
  "--font-sans"?: string; // Optional, defined in clay/notebook
  "--font-serif"?: string; // Optional, defined in clay/notebook
  "--font-mono"?: string; // Optional, defined in clay/notebook
  "--tracking-normal"?: string; // Optional, defined in notebook

  // Sizing & effects
  "--radius"?: string; // Optional
  "--shadow-2xs"?: string; // Optional
  "--shadow-xs"?: string; // Optional
  "--shadow-sm"?: string; // Optional
  "--shadow"?: string; // Optional
  "--shadow-md"?: string; // Optional
  "--shadow-lg"?: string; // Optional
  "--shadow-xl"?: string; // Optional
  "--shadow-2xl"?: string; // Optional
}

// Structure for theme modes
interface ThemeModes {
  light: ThemeVariables;
  dark: ThemeVariables;
}

// 3. Data structure holding all themes and their variables
const themes: Record<ThemeName, ThemeModes> = {
  clay: {
    light: {
      "--background": "oklch(0.9232 0.0026 48.7171)",
      "--foreground": "oklch(0.2795 0.0368 260.031)",
      "--card": "oklch(0.9699 0.0013 106.4238)",
      "--card-foreground": "oklch(0.2795 0.0368 260.031)",
      "--popover": "oklch(0.9699 0.0013 106.4238)",
      "--popover-foreground": "oklch(0.2795 0.0368 260.031)",
      "--primary": "oklch(77.54% 0.1681 162.78)", // Using the non-commented value
      "--primary-foreground": "oklch(1.0 0 0)",
      "--secondary": "oklch(0.8687 0.0043 56.366)",
      "--secondary-foreground": "oklch(0.4461 0.0263 256.8018)",
      "--muted": "oklch(0.9232 0.0026 48.7171)",
      "--muted-foreground": "oklch(0.551 0.0234 264.3637)",
      "--accent": "oklch(0.9376 0.026 321.9388)",
      "--accent-foreground": "oklch(0.3729 0.0306 259.7328)",
      "--destructive": "oklch(0.6368 0.2078 25.3313)",
      "--destructive-foreground": "oklch(1.0 0 0)",
      "--border": "oklch(0.8687 0.0043 56.366)",
      "--input": "oklch(0.8687 0.0043 56.366)",
      "--ring": "oklch(77.54% 0.1681 162.78)", // Using the non-commented value
      "--chart-1": "oklch(77.54% 0.1681 162.78)", // Using the non-commented value
      "--chart-2": "oklch(0.5106 0.2301 276.9656)",
      "--chart-3": "oklch(0.4568 0.2146 277.0229)",
      "--chart-4": "oklch(0.3984 0.1773 277.3662)",
      "--chart-5": "oklch(0.3588 0.1354 278.6973)",
      "--sidebar": "oklch(0.8687 0.0043 56.366)",
      "--sidebar-foreground": "oklch(0.2795 0.0368 260.031)",
      "--sidebar-primary": "oklch(77.54% 0.1681 162.78)", // Using the non-commented value
      "--sidebar-primary-foreground": "oklch(1.0 0 0)",
      "--sidebar-accent": "oklch(0.9376 0.026 321.9388)",
      "--sidebar-accent-foreground": "oklch(0.3729 0.0306 259.7328)",
      "--sidebar-border": "oklch(0.8687 0.0043 56.366)",
      "--sidebar-ring": "oklch(77.54% 0.1681 162.78)", // Using the non-commented value
      "--font-sans": "Plus Jakarta Sans, sans-serif",
      "--font-serif": "Lora, serif",
      "--font-mono": "Roboto Mono, monospace",
      "--radius": "1.25rem",
      "--shadow-2xs": "2px 2px 10px 4px hsl(240 4% 60% / 0.09)",
      "--shadow-xs": "2px 2px 10px 4px hsl(240 4% 60% / 0.09)",
      "--shadow-sm":
        "2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 1px 2px 3px hsl(240 4% 60% / 0.18)",
      "--shadow":
        "2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 1px 2px 3px hsl(240 4% 60% / 0.18)",
      "--shadow-md":
        "2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 2px 4px 3px hsl(240 4% 60% / 0.18)",
      "--shadow-lg":
        "2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 4px 6px 3px hsl(240 4% 60% / 0.18)",
      "--shadow-xl":
        "2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 8px 10px 3px hsl(240 4% 60% / 0.18)",
      "--shadow-2xl": "2px 2px 10px 4px hsl(240 4% 60% / 0.45)",
    },
    dark: {
      "--background": "oklch(0.2244 0.0074 67.437)",
      "--foreground": "oklch(0.9288 0.0126 255.5078)",
      "--card": "oklch(0.2801 0.008 59.3379)",
      "--card-foreground": "oklch(0.9288 0.0126 255.5078)",
      "--popover": "oklch(0.2801 0.008 59.3379)",
      "--popover-foreground": "oklch(0.9288 0.0126 255.5078)",
      "--primary": "oklch(77.54% 0.1681 162.78)", // Using the non-commented value
      "--primary-foreground": "oklch(0.2244 0.0074 67.437)",
      "--secondary": "oklch(0.3359 0.0077 59.4197)",
      "--secondary-foreground": "oklch(0.8717 0.0093 258.3382)",
      "--muted": "oklch(0.2801 0.008 59.3379)",
      "--muted-foreground": "oklch(0.7137 0.0192 261.3246)",
      "--accent": "oklch(0.3896 0.0074 59.4734)",
      "--accent-foreground": "oklch(0.8717 0.0093 258.3382)",
      "--destructive": "oklch(0.6368 0.2078 25.3313)",
      "--destructive-foreground": "oklch(0.2244 0.0074 67.437)",
      "--border": "oklch(0.3359 0.0077 59.4197)",
      "--input": "oklch(0.3359 0.0077 59.4197)",
      "--ring": "oklch(77.54% 0.1681 162.78)", // Using the non-commented value
      "--chart-1": "oklch(77.54% 0.1681 162.78)", // Using the non-commented value
      "--chart-2": "oklch(0.5854 0.2041 277.1173)",
      "--chart-3": "oklch(0.5106 0.2301 276.9656)",
      "--chart-4": "oklch(0.4568 0.2146 277.0229)",
      "--chart-5": "oklch(0.3984 0.1773 277.3662)",
      "--sidebar": "oklch(0.3359 0.0077 59.4197)",
      "--sidebar-foreground": "oklch(0.9288 0.0126 255.5078)",
      "--sidebar-primary": "oklch(77.54% 0.1681 162.78)", // Using the non-commented value
      "--sidebar-primary-foreground": "oklch(0.2244 0.0074 67.437)",
      "--sidebar-accent": "oklch(0.3896 0.0074 59.4734)",
      "--sidebar-accent-foreground": "oklch(0.8717 0.0093 258.3382)",
      "--sidebar-border": "oklch(0.3359 0.0077 59.4197)",
      "--sidebar-ring": "oklch(77.54% 0.1681 162.78)", // Using the non-commented value
      "--font-sans": "Plus Jakarta Sans, sans-serif",
      "--font-serif": "Lora, serif",
      "--font-mono": "Roboto Mono, monospace",
      "--radius": "1.25rem",
      "--shadow-2xs": "2px 2px 10px 4px hsl(0 0% 0% / 0.09)",
      "--shadow-xs": "2px 2px 10px 4px hsl(0 0% 0% / 0.09)",
      "--shadow-sm":
        "2px 2px 10px 4px hsl(0 0% 0% / 0.18), 2px 1px 2px 3px hsl(0 0% 0% / 0.18)",
      "--shadow":
        "2px 2px 10px 4px hsl(0 0% 0% / 0.18), 2px 1px 2px 3px hsl(0 0% 0% / 0.18)",
      "--shadow-md":
        "2px 2px 10px 4px hsl(0 0% 0% / 0.18), 2px 2px 4px 3px hsl(0 0% 0% / 0.18)",
      "--shadow-lg":
        "2px 2px 10px 4px hsl(0 0% 0% / 0.18), 2px 4px 6px 3px hsl(0 0% 0% / 0.18)",
      "--shadow-xl":
        "2px 2px 10px 4px hsl(0 0% 0% / 0.18), 2px 8px 10px 3px hsl(0 0% 0% / 0.18)",
      "--shadow-2xl": "2px 2px 10px 4px hsl(0 0% 0% / 0.45)",
    },
  },
  default: {
    light: {
      "--background": "oklch(1 0 0)",
      "--foreground": "oklch(0.145 0 0)",
      "--card": "oklch(1 0 0)",
      "--card-foreground": "oklch(0.145 0 0)",
      "--popover": "oklch(1 0 0)",
      "--popover-foreground": "oklch(0.145 0 0)",
      "--primary": "oklch(77.54% 0.1681 162.78)",
      "--primary-foreground": "oklch(0.985 0 0)",
      "--secondary": "oklch(0.97 0 0)",
      "--secondary-foreground": "oklch(0.205 0 0)",
      "--muted": "oklch(0.97 0 0)",
      "--muted-foreground": "oklch(0.556 0 0)",
      "--accent": "oklch(0.97 0 0)",
      "--accent-foreground": "oklch(0.205 0 0)",
      "--destructive": "oklch(0.577 0.245 27.325)",
      "--destructive-foreground": "oklch(0.577 0.245 27.325)",
      "--border": "oklch(0.922 0 0)",
      "--input": "oklch(0.922 0 0)",
      "--ring": "oklch(0.708 0 0)",
      "--chart-1": "oklch(0.646 0.222 41.116)",
      "--chart-2": "oklch(0.6 0.118 184.704)",
      "--chart-3": "oklch(0.398 0.07 227.392)",
      "--chart-4": "oklch(0.828 0.189 84.429)",
      "--chart-5": "oklch(0.769 0.188 70.08)",
      "--radius": "0.625rem",
      "--sidebar": "oklch(0.985 0 0)",
      "--sidebar-foreground": "oklch(0.145 0 0)",
      "--sidebar-primary": "oklch(77.54% 0.1681 162.78)",
      "--sidebar-primary-foreground": "oklch(0.985 0 0)",
      "--sidebar-accent": "oklch(0.97 0 0)",
      "--sidebar-accent-foreground": "oklch(0.205 0 0)",
      "--sidebar-border": "oklch(0.922 0 0)",
      "--sidebar-ring": "oklch(0.708 0 0)",
    },
    dark: {
      "--background": "oklch(0.145 0 0)",
      "--foreground": "oklch(0.985 0 0)",
      "--card": "oklch(0.145 0 0)",
      "--card-foreground": "oklch(0.985 0 0)",
      "--popover": "oklch(0.145 0 0)",
      "--popover-foreground": "oklch(0.985 0 0)",
      "--primary": "oklch(77.54% 0.1681 162.78)",
      "--primary-foreground": "oklch(0.205 0 0)",
      "--secondary": "oklch(0.269 0 0)",
      "--secondary-foreground": "oklch(0.985 0 0)",
      "--muted": "oklch(0.269 0 0)",
      "--muted-foreground": "oklch(0.708 0 0)",
      "--accent": "oklch(0.269 0 0)",
      "--accent-foreground": "oklch(0.985 0 0)",
      "--destructive": "oklch(0.396 0.141 25.723)",
      "--destructive-foreground": "oklch(0.637 0.237 25.331)",
      "--border": "oklch(0.269 0 0)",
      "--input": "oklch(0.269 0 0)",
      "--ring": "oklch(0.556 0 0)",
      "--chart-1": "oklch(0.488 0.243 264.376)",
      "--chart-2": "oklch(0.696 0.17 162.48)",
      "--chart-3": "oklch(0.769 0.188 70.08)",
      "--chart-4": "oklch(0.627 0.265 303.9)",
      "--chart-5": "oklch(0.645 0.246 16.439)",
      "--sidebar": "oklch(0.205 0 0)",
      "--sidebar-foreground": "oklch(0.985 0 0)",
      "--sidebar-primary": "oklch(77.54% 0.1681 162.78)",
      "--sidebar-primary-foreground": "oklch(0.985 0 0)",
      "--sidebar-accent": "oklch(0.269 0 0)",
      "--sidebar-accent-foreground": "oklch(0.985 0 0)",
      "--sidebar-border": "oklch(0.269 0 0)",
      "--sidebar-ring": "oklch(0.439 0 0)",
    },
  },
  nature: {
    light: {
      "--background": "oklch(0.9711 0.0074 80.7211)",
      "--foreground": "oklch(0.3000 0.0358 30.2042)",
      "--card": "oklch(0.9711 0.0074 80.7211)",
      "--card-foreground": "oklch(0.3000 0.0358 30.2042)",
      "--popover": "oklch(0.9711 0.0074 80.7211)",
      "--popover-foreground": "oklch(0.3000 0.0358 30.2042)",
      "--primary": "oklch(0.5234 0.1347 144.1672)",
      "--primary-foreground": "oklch(1.0000 0 0)",
      "--secondary": "oklch(0.9571 0.0210 147.6360)",
      "--secondary-foreground": "oklch(0.4254 0.1159 144.3078)",
      "--muted": "oklch(0.9370 0.0142 74.4218)",
      "--muted-foreground": "oklch(0.4495 0.0486 39.2110)",
      "--accent": "oklch(0.8952 0.0504 146.0366)",
      "--accent-foreground": "oklch(0.4254 0.1159 144.3078)",
      "--destructive": "oklch(0.5386 0.1937 26.7249)",
      "--destructive-foreground": "oklch(1.0000 0 0)",
      "--border": "oklch(0.8805 0.0208 74.6428)",
      "--input": "oklch(0.8805 0.0208 74.6428)",
      "--ring": "oklch(0.5234 0.1347 144.1672)",
      "--chart-1": "oklch(0.6731 0.1624 144.2083)",
      "--chart-2": "oklch(0.5752 0.1446 144.1813)",
      "--chart-3": "oklch(0.5234 0.1347 144.1672)",
      "--chart-4": "oklch(0.4254 0.1159 144.3078)",
      "--chart-5": "oklch(0.2157 0.0453 145.7256)",
      "--sidebar": "oklch(0.9370 0.0142 74.4218)",
      "--sidebar-foreground": "oklch(0.3000 0.0358 30.2042)",
      "--sidebar-primary": "oklch(0.5234 0.1347 144.1672)",
      "--sidebar-primary-foreground": "oklch(1.0000 0 0)",
      "--sidebar-accent": "oklch(0.8952 0.0504 146.0366)",
      "--sidebar-accent-foreground": "oklch(0.4254 0.1159 144.3078)",
      "--sidebar-border": "oklch(0.8805 0.0208 74.6428)",
      "--sidebar-ring": "oklch(0.5234 0.1347 144.1672)",
      "--font-sans": "Montserrat, sans-serif",
      "--font-serif": "Merriweather, serif",
      "--font-mono": "Source Code Pro, monospace",
      "--radius": "0.5rem",
      "--shadow-2xs": "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
      "--shadow-xs": "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
      "--shadow-sm":
        "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)",
      "--shadow":
        "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)",
      "--shadow-md":
        "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10)",
      "--shadow-lg":
        "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10)",
      "--shadow-xl":
        "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10)",
      "--shadow-2xl": "0 1px 3px 0px hsl(0 0% 0% / 0.25)",
    },
    dark: {
      "--background": "oklch(0.2683 0.0279 150.7681)",
      "--foreground": "oklch(0.9423 0.0097 72.6595)",
      "--card": "oklch(0.3327 0.0271 146.9867)",
      "--card-foreground": "oklch(0.9423 0.0097 72.6595)",
      "--popover": "oklch(0.3327 0.0271 146.9867)",
      "--popover-foreground": "oklch(0.9423 0.0097 72.6595)",
      "--primary": "oklch(0.6731 0.1624 144.2083)",
      "--primary-foreground": "oklch(0.2157 0.0453 145.7256)",
      "--secondary": "oklch(0.3942 0.0265 142.9926)",
      "--secondary-foreground": "oklch(0.8970 0.0166 142.5518)",
      "--muted": "oklch(0.3327 0.0271 146.9867)",
      "--muted-foreground": "oklch(0.8579 0.0174 76.0955)",
      "--accent": "oklch(0.5752 0.1446 144.1813)",
      "--accent-foreground": "oklch(0.9423 0.0097 72.6595)",
      "--destructive": "oklch(0.5386 0.1937 26.7249)",
      "--destructive-foreground": "oklch(0.9423 0.0097 72.6595)",
      "--border": "oklch(0.3942 0.0265 142.9926)",
      "--input": "oklch(0.3942 0.0265 142.9926)",
      "--ring": "oklch(0.6731 0.1624 144.2083)",
      "--chart-1": "oklch(0.7660 0.1179 145.2950)",
      "--chart-2": "oklch(0.7185 0.1417 144.8887)",
      "--chart-3": "oklch(0.6731 0.1624 144.2083)",
      "--chart-4": "oklch(0.6291 0.1543 144.2031)",
      "--chart-5": "oklch(0.5752 0.1446 144.1813)",
      "--sidebar": "oklch(0.3942 0.0265 142.9926)", // Using non-commented value
      "--sidebar-foreground": "oklch(0.9423 0.0097 72.6595)",
      "--sidebar-primary": "oklch(0.6731 0.1624 144.2083)",
      "--sidebar-primary-foreground": "oklch(0.2157 0.0453 145.7256)",
      "--sidebar-accent": "oklch(0.5752 0.1446 144.1813)",
      "--sidebar-accent-foreground": "oklch(0.9423 0.0097 72.6595)",
      "--sidebar-border": "oklch(0.3942 0.0265 142.9926)",
      "--sidebar-ring": "oklch(0.6731 0.1624 144.2083)",
      "--font-sans": "Montserrat, sans-serif",
      "--font-serif": "Merriweather, serif",
      "--font-mono": "Source Code Pro, monospace",
      "--radius": "0.5rem",
      "--shadow-2xs": "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
      "--shadow-xs": "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
      "--shadow-sm":
        "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)",
      "--shadow":
        "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)",
      "--shadow-md":
        "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10)",
      "--shadow-lg":
        "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10)",
      "--shadow-xl":
        "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10)",
      "--shadow-2xl": "0 1px 3px 0px hsl(0 0% 0% / 0.25)",
    },
  },
  notebook: {
    light: {
      "--background": "oklch(0.9821 0 0)",
      "--foreground": "oklch(0.3485 0 0)",
      "--card": "oklch(1.0 0 0)",
      "--card-foreground": "oklch(0.3485 0 0)",
      "--popover": "oklch(1.0 0 0)",
      "--popover-foreground": "oklch(0.3485 0 0)",
      "--primary": "oklch(77.54% 0.1681 162.78)", // Using non-commented value
      "--primary-foreground": "oklch(0.9551 0 0)",
      "--secondary": "oklch(0.9006 0 0)",
      "--secondary-foreground": "oklch(0.3485 0 0)",
      "--muted": "oklch(0.9158 0 0)",
      "--muted-foreground": "oklch(0.4313 0 0)",
      "--accent": "oklch(0.9354 0.0456 94.8549)",
      "--accent-foreground": "oklch(0.4015 0.0436 37.9587)",
      "--destructive": "oklch(0.6627 0.0978 20.0041)",
      "--destructive-foreground": "oklch(1.0 0 0)",
      "--border": "oklch(0.5538 0.0025 17.232)",
      "--input": "oklch(1.0 0 0)",
      "--ring": "oklch(0.7058 0 0)",
      "--chart-1": "oklch(0.3211 0 0)",
      "--chart-2": "oklch(0.4495 0 0)",
      "--chart-3": "oklch(0.5693 0 0)",
      "--chart-4": "oklch(0.683 0 0)",
      "--chart-5": "oklch(0.7921 0 0)",
      "--sidebar": "oklch(0.9551 0 0)",
      "--sidebar-foreground": "oklch(0.3485 0 0)",
      "--sidebar-primary": "oklch(77.54% 0.1681 162.78)", // Using non-commented value
      "--sidebar-primary-foreground": "oklch(0.9551 0 0)",
      "--sidebar-accent": "oklch(0.9354 0.0456 94.8549)",
      "--sidebar-accent-foreground": "oklch(0.4015 0.0436 37.9587)",
      "--sidebar-border": "oklch(0.8078 0 0)",
      "--sidebar-ring": "oklch(0.7058 0 0)",
      "--font-sans": "Architects Daughter, sans-serif",
      "--font-serif": '"Times New Roman", Times, serif',
      "--font-mono": '"Courier New", Courier, monospace',
      "--radius": "0.625rem",
      "--shadow-2xs": "1px 4px 5px 0px hsl(0 0% 0% / 0.01)",
      "--shadow-xs": "1px 4px 5px 0px hsl(0 0% 0% / 0.01)",
      "--shadow-sm":
        "1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 1px 2px -1px hsl(0 0% 0% / 0.03)",
      "--shadow":
        "1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 1px 2px -1px hsl(0 0% 0% / 0.03)",
      "--shadow-md":
        "1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 2px 4px -1px hsl(0 0% 0% / 0.03)",
      "--shadow-lg":
        "1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 4px 6px -1px hsl(0 0% 0% / 0.03)",
      "--shadow-xl":
        "1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 8px 10px -1px hsl(0 0% 0% / 0.03)",
      "--shadow-2xl": "1px 4px 5px 0px hsl(0 0% 0% / 0.07)",
      "--tracking-normal": "0.5px",
    },
    dark: {
      "--background": "oklch(0.2891 0 0)",
      "--foreground": "oklch(0.8945 0 0)",
      "--card": "oklch(0.3211 0 0)",
      "--card-foreground": "oklch(0.8945 0 0)",
      "--popover": "oklch(0.3211 0 0)",
      "--popover-foreground": "oklch(0.8945 0 0)",
      "--primary": "oklch(77.54% 0.1681 162.78)", // Using non-commented value
      "--primary-foreground": "oklch(0.2891 0 0)",
      "--secondary": "oklch(0.4676 0 0)",
      "--secondary-foreground": "oklch(0.8078 0 0)",
      "--muted": "oklch(0.3904 0 0)",
      "--muted-foreground": "oklch(0.7058 0 0)",
      "--accent": "oklch(0.9067 0 0)",
      "--accent-foreground": "oklch(0.3211 0 0)",
      "--destructive": "oklch(0.7915 0.0491 18.241)",
      "--destructive-foreground": "oklch(0.2891 0 0)",
      "--border": "oklch(0.4276 0 0)",
      "--input": "oklch(0.3211 0 0)",
      "--ring": "oklch(0.8078 0 0)",
      "--chart-1": "oklch(0.9521 0 0)",
      "--chart-2": "oklch(0.8576 0 0)",
      "--chart-3": "oklch(0.7572 0 0)",
      "--chart-4": "oklch(0.6534 0 0)",
      "--chart-5": "oklch(0.5452 0 0)",
      "--sidebar": "oklch(0.2478 0 0)",
      "--sidebar-foreground": "oklch(0.8945 0 0)",
      "--sidebar-primary": "oklch(77.54% 0.1681 162.78)", // Using non-commented value
      "--sidebar-primary-foreground": "oklch(0.2478 0 0)",
      "--sidebar-accent": "oklch(0.9067 0 0)",
      "--sidebar-accent-foreground": "oklch(0.3211 0 0)",
      "--sidebar-border": "oklch(0.4276 0 0)",
      "--sidebar-ring": "oklch(0.8078 0 0)",
      "--font-sans": "Architects Daughter, sans-serif",
      "--font-serif": "Georgia, serif",
      "--font-mono": '"Fira Code", "Courier New", monospace',
      "--radius": "0.625rem",
      "--shadow-2xs": "1px 4px 5px 0px hsl(0 0% 0% / 0.01)",
      "--shadow-xs": "1px 4px 5px 0px hsl(0 0% 0% / 0.01)",
      "--shadow-sm":
        "1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 1px 2px -1px hsl(0 0% 0% / 0.03)",
      "--shadow":
        "1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 1px 2px -1px hsl(0 0% 0% / 0.03)",
      "--shadow-md":
        "1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 2px 4px -1px hsl(0 0% 0% / 0.03)",
      "--shadow-lg":
        "1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 4px 6px -1px hsl(0 0% 0% / 0.03)",
      "--shadow-xl":
        "1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 8px 10px -1px hsl(0 0% 0% / 0.03)",
      "--shadow-2xl": "1px 4px 5px 0px hsl(0 0% 0% / 0.07)",
      // '--tracking-normal': '0.5px', // Tracking is the same in dark mode for notebook theme
    },
  },
};

export function setThemeColorVariables(themName: ThemeName) {
  const r = window.document.querySelector(":root") as HTMLElement;
  // ['clay', {light: {}, dark: {}}]
  const theme = Object.entries(themes).find(
    ([color, _styles]) => color === themName,
  ) ?? ["clay", themes.clay];

  localStorage.setItem("theme", JSON.stringify(theme[1]));

  const isDarkMode = document.documentElement.classList.contains("dark");
  const themeVariables = theme[1][isDarkMode ? "dark" : "light"];

  for (const varName of Object.keys(themeVariables)) {
    //@ts-expect-error this is fine
    r.style.setProperty(varName, themeVariables[varName as string]);
  }
}

// TODO: handle system
export function setThemeMode(modeName: "light" | "dark" | "system") {
  if (modeName !== "dark") {
    document.documentElement.classList.remove("dark");
  }

  if (modeName === "dark") {
    document.documentElement.classList.add("dark");
  }
}
