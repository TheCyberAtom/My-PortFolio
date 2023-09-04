// ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(true);

  // Toggle the theme and store it in local storage
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Initialize the theme from local storage (or use a default)
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
    }
  }, []);

  // Set the CSS variables based on the theme
  // 24ad99 - good-color
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', isDarkMode ? '#3F96EC' : '#1E55AE');
    root.style.setProperty('--secondary-color', isDarkMode ? '#F7F7F7' : '#141824');
    root.style.setProperty('--background-color', isDarkMode ? '#0E0E0E' : '#FFFFFF');
    root.style.setProperty('--background-color-2', isDarkMode ? '#151515' : '#EFEFEF');
    root.style.setProperty('--text-color', isDarkMode ? '#F5F5F5' : '#333333');
}, [isDarkMode]);


  const theme = isDarkMode ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
