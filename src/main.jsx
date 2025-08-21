import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//importing context
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { StudentContextProvider } from "./context/StudentContext.jsx";
import { TeacherContextProvider } from "./context/TeacherContext.jsx";
import { DarkModeContextProvider } from "./context/DarkModeContext.jsx";
createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <AuthContextProvider>
      <StudentContextProvider>
        <TeacherContextProvider>
          <App />
        </TeacherContextProvider>
      </StudentContextProvider>
    </AuthContextProvider>
  </DarkModeContextProvider>
);
