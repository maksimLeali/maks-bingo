import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'
import { useAppContext } from './contexts'
import { Test } from './componenst/test'


export const App = React.memo(()=> {
  const [count, setCount] = useState(0)
  
  const { setTheme } = useAppContext();
  setTheme('light')
  useEffect(() => {
    console.log(count % 2 , count % 2 == 0  ? 'light' : 'dark')
    if (count % 2 == 0) {
      setTheme('light')
      return
    }
    setTheme('dark')
  }, [count])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <Test/>

    
    </>
  )
})

