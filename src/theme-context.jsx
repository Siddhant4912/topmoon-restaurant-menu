// import React, { useState } from 'react'
import { createContext,useEffect,useState } from 'react';
import App from './App';
const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [isDarkMode, setIsDarkmode]= useState(false);

    const toggleTheme = () => setIsDarkmode((prev)=>!prev);

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",isDarkMode ? "light": "dark");
    },[isDarkMode])
  return (
    <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;