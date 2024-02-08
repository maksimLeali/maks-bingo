import React, { useContext, useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'
export type IAppContext = {
    webpSupported: boolean,
    setTheme: (theme: 'light' | 'dark') => void
}


const defaultValue: IAppContext = {
    webpSupported: true,
    setTheme: () => {},
}


const AppContext = React.createContext<IAppContext>(defaultValue)

type Props = {
    children: React.ReactNode,
}




export const AppContextProvider: React.FC<Props & Record<string, unknown>> = ({ children }) => {
    const [theme, setColorTheme] = useState('dark')
    const webpSupported = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;

    const setTheme = ( theme:  'dark' | 'light') =>{
        
        setColorTheme(theme)
    }


    const mainTheme =useMemo(()=> {
        return {
            colors: theme === 'light' ? {
                                            black: "#0C120CFF",
                                            white: "#FFFBFCFF",
                                            green: "#0E8140",
                                            red: "#C20114FF",
                                            purple: "#9A879DFF"
                                        }
                        : {
                            black: "#FFFBFCFF",
                            white: "#0C120CFF",
                            green: "#31E981FF",
                            red: "#C20114FF",
                            purple: "#9A879DFF"
                        },
            uw: (val: number) => `calc(1vw * 100 / 32 * #{${val}})`
        }
    }, [theme])

    const value = useMemo(() => ({ ...defaultValue, webpSupported, setTheme }), [])

    return <AppContext.Provider value={value}>
        <ThemeProvider theme={mainTheme}>
            {children}
        </ThemeProvider>
    </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
