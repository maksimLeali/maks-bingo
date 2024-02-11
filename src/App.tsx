import React from 'react'
import { AppRouter } from './routes'
import { AppContextProvider } from './contexts/index.ts'


export const App = React.memo(() => {


  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  )
})

