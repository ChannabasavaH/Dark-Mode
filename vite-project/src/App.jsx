import './App.css'
import ReactComponent from './components/React'
import { createContext,useState } from 'react'
export const ThemeContext = createContext(null);


function App() {

  const [darkMode,setDarkMode] = useState('light');

  return (
    <>
      <ThemeContext.Provider value={darkMode} >
        <ReactComponent />
        <input type="checkbox" checked={darkMode === 'dark'} onChange={(event) => {setDarkMode(event.target.checked ? 'dark' : 'light')}} />
        use dark mode
      </ThemeContext.Provider>
    </>
  )
}

export default App
