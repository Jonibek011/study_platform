import { useEffect, useState } from "react";
import { createContext } from "use-context-selector";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <DarkModeContext.Provider value={{ toggleDarkMode, isDark }}>
      {children}
    </DarkModeContext.Provider>
  );
};
