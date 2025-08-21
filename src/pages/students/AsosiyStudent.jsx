import React, { useEffect, useState } from "react";

const LocalDark = localStorage.getItem("dark");
function AsosiyStudent() {
  const [theme, setTheme] = useState(LocalDark);
  const toggleButton = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList = theme;

    localStorage.setItem("dark", theme);
  }, [theme]);
  return (
    <div>
      <button className="btn" onClick={toggleButton}>
        Dark mode
      </button>
    </div>
  );
}

export default AsosiyStudent;
