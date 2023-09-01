import * as React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
