import { useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  return (

    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='d-flex flex-column w-50 mx-auto'>

        <div className='align-self-end'>
          <ThemeBtn/>
        </div>

        <div className='w-100 align-self-center'>
          <Card />
        </div>


      </div>
    </ThemeProvider>

  )
}

export default App
