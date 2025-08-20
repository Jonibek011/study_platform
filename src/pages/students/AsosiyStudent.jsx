import React from "react";

function AsosiyStudent() {
  const toggleButton = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div>
      <button className="btn" onClick={toggleButton}>
        Dark mode
      </button>
    </div>
  );
}

export default AsosiyStudent;
