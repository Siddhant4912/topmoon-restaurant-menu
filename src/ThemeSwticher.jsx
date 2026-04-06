import React, { useContext } from 'react'
import ThemeContext from './theme-context'

export const ThemeSwticher = () => {
   const {isDarkMode,toggleTheme}= useContext(ThemeContext);
  return (
    <div>
        <button onClick={toggleTheme}>Switch to {isDarkMode ? "Light": "Dark"} mode</button>
    </div>
  )
}
