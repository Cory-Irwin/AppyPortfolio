import { createContext, ReactNode, useContext, useState } from "react"


type Theme = 'Light' | 'Dark'

type ThemeContext = {
    activeTheme: Theme
    updateTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContext | null>(null)

export default function useTheme() {
    const theme = useContext(ThemeContext)

    if (!theme)
        throw new Error('useTheme must be called within a ThemeContextProvider')

    return theme
}

export function ThemeContextProvider(props: {
    children?: ReactNode
}) {
    const [activeTheme, setActiveTheme] = useState<Theme>(localStorage.getItem('ci-site-theme') as Theme | null ?? 'Light')

    const updateTheme = (theme: Theme) => {
        localStorage.setItem('ci-site-theme', theme)

        setActiveTheme(theme)
    }

    return (
        <ThemeContext.Provider value={{activeTheme, updateTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
