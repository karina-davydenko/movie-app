import type { ReactNode } from 'react'
import { createContext, useMemo, useState } from 'react'

type Theme = 'default' | 'secondary'

type Props = {
  children: ReactNode
}

type ThemeContext = {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContext>({
  theme: 'default',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>('default')

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme(): void {
        setTheme(prevTheme =>
          prevTheme === 'default' ? 'secondary' : 'default',
        )
      },
    }),
    [theme],
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
