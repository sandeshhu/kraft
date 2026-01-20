'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      storageKey="kraftx-theme" // Add a custom storage key
      enableColorScheme={true}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}