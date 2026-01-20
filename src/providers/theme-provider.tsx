'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      storageKey="kraftx-theme" // Add a custom storage key
      enableColorScheme={true}
    >
      {children}
    </NextThemesProvider>
  )
}