// ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

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
    root.style.setProperty('--primary-color', isDarkMode ? '#5427C3' : '#7037F8');
    root.style.setProperty('--secondary-color', isDarkMode ? '#d7f5f1' : '#2F4C49');
    root.style.setProperty('--white-color', isDarkMode ? '#0E0E0E' : '#F5F5F5');
    root.style.setProperty('--off-white', isDarkMode ? '#333333' : '#D5D5D5');
    root.style.setProperty('--black-color', isDarkMode ? '#F5F5F5' : '#191919');
    root.style.setProperty('--off-black', isDarkMode ? '#D5D5D5' : '#111111');
  }, [isDarkMode]);

  const theme = isDarkMode ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
