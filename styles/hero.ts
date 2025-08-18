import { heroui } from "@heroui/theme";

const config = heroui({
  themes: {
    // Custom Meyoo Theme - Vibrant and Modern
    light: {
      extend: "light",
      colors: {
        // Primary - Teal
        primary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          foreground: "#ffffff",
          DEFAULT: "#14b8a6",
        },
        // Secondary - Emerald
        secondary: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          foreground: "#ffffff",
          DEFAULT: "#10b981",
        },
        // Success - Emerald
        success: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          foreground: "#ffffff",
          DEFAULT: "#10b981",
        },
        // Warning - Orange
        warning: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          foreground: "#ffffff",
          DEFAULT: "#ea580c",
        },
        // Danger - Rose
        danger: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          foreground: "#ffffff",
          DEFAULT: "#e11d48",
        },
        // Default - Zinc for professional cool grays
        default: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          foreground: "#18181b",
          DEFAULT: "#d4d4d8",
        },
        // Backgrounds and Content
        background: "#fafafa",
        foreground: "#18181b",
        content1: {
          DEFAULT: "#ffffff",
          foreground: "#18181b",
        },
        content2: {
          DEFAULT: "#f4f4f5",
          foreground: "#18181b",
        },
        content3: {
          DEFAULT: "#e4e4e7",
          foreground: "#18181b",
        },
        content4: {
          DEFAULT: "#d4d4d8",
          foreground: "#18181b",
        },
        focus: "#14b8a6",
        divider: {
          DEFAULT: "#e4e4e7",
        },
      },
    },
    // Dark variant of Meyoo theme - Vibrant and Modern
    dark: {
      extend: "dark",
      colors: {
        // Primary - Teal
        primary: {
          50: "#134e4a",
          100: "#115e59",
          200: "#0f766e",
          300: "#0d9488",
          400: "#14b8a6",
          500: "#2dd4bf",
          600: "#5eead4",
          700: "#99f6e4",
          800: "#ccfbf1",
          900: "#f0fdfa",
          foreground: "#ffffff",
          DEFAULT: "#0d9488",
        },
        // Secondary - Emerald
        secondary: {
          50: "#064e3b",
          100: "#065f46",
          200: "#047857",
          300: "#059669",
          400: "#10b981",
          500: "#34d399",
          600: "#6ee7b7",
          700: "#a7f3d0",
          800: "#d1fae5",
          900: "#ecfdf5",
          foreground: "#ffffff",
          DEFAULT: "#059669",
        },
        // Success - Emerald
        success: {
          50: "#064e3b",
          100: "#065f46",
          200: "#047857",
          300: "#059669",
          400: "#10b981",
          500: "#34d399",
          600: "#6ee7b7",
          700: "#a7f3d0",
          800: "#d1fae5",
          900: "#ecfdf5",
          foreground: "#ffffff",
          DEFAULT: "#10b981",
        },
        // Warning - Orange
        warning: {
          50: "#7c2d12",
          100: "#9a3412",
          200: "#c2410c",
          300: "#ea580c",
          400: "#f97316",
          500: "#fb923c",
          600: "#fdba74",
          700: "#fed7aa",
          800: "#ffedd5",
          900: "#fff7ed",
          foreground: "#ffffff",
          DEFAULT: "#ea580c",
        },
        // Danger - Rose
        danger: {
          50: "#881337",
          100: "#9f1239",
          200: "#be123c",
          300: "#e11d48",
          400: "#f43f5e",
          500: "#fb7185",
          600: "#fda4af",
          700: "#fecdd3",
          800: "#ffe4e6",
          900: "#fff1f2",
          foreground: "#ffffff",
          DEFAULT: "#e11d48",
        },
        // Default - Zinc for dark mode
        default: {
          50: "#18181b",
          100: "#27272a",
          200: "#3f3f46",
          300: "#52525b",
          400: "#71717a",
          500: "#a1a1aa",
          600: "#d4d4d8",
          700: "#e4e4e7",
          800: "#f4f4f5",
          900: "#fafafa",
          foreground: "#fafafa",
          DEFAULT: "#52525b",
        },
        // Backgrounds and Content for dark mode with zinc
        background: "#09090b",
        foreground: "#fafafa",
        content1: {
          DEFAULT: "#18181b",
          foreground: "#fafafa",
        },
        content2: {
          DEFAULT: "#27272a",
          foreground: "#fafafa",
        },
        content3: {
          DEFAULT: "#3f3f46",
          foreground: "#fafafa",
        },
        content4: {
          DEFAULT: "#52525b",
          foreground: "#fafafa",
        },
        focus: "#14b8a6",
        divider: {
          DEFAULT: "#3f3f46",
        },
      },
    },
  },
  layout: {
    disabledOpacity: "0.5",
    // You can add custom shadow definitions here
    boxShadow: {
      small: "none", // Remove small shadow
      medium: "none", // Remove medium shadow
      large: "none", // Remove large shadow
    },
  },
});

export default config;
