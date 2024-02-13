import React, { useCallback, useContext, useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { colorThemes } from '../utils'
export type IAppContext = {
    webpSupported: boolean,
    switchMode:() => void
}

const defaultValue: IAppContext = {
    webpSupported: true,
    switchMode: () => { },
}

const AppContext = React.createContext<IAppContext>(defaultValue)

type Props = {
    children: React.ReactNode,
}

export const AppContextProvider: React.FC<Props & Record<string, unknown>> = ({ children }) => {
    const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark')
    const webpSupported = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;

    const switchMode = useCallback((mode?: 'dark' | 'light') => {
        if(mode){
            setThemeMode(mode)
            return
        }
        if(themeMode == 'light') {
            setThemeMode('dark')
            return
        }
        setThemeMode('light')
    }, [themeMode])

    const mainTheme = useMemo(() => {
        return {
            colors: colorThemes[themeMode],
            uw: (val: number) => `calc(1vw * 100 / 32 * ${val})`
        }
    }, [themeMode])

    const value = useMemo(() => ({ ...defaultValue, webpSupported, switchMode }), [themeMode])

    return <AppContext.Provider value={value}>
        <ThemeProvider theme={mainTheme}>
            {children}
        </ThemeProvider>
    </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
