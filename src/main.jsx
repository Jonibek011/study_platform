import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//importing context
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { StudentContextProvider } from "./context/StudentContext.jsx";
import { TeacherContextProvider } from "./context/TeacherContext.jsx";
import { DarkModeContextProvider } from "./context/DarkModeContext.jsx";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <AuthContextProvider>
      <StudentContextProvider>
        <TeacherContextProvider>
          <App />
          <Toaster position="top-center" reverseOrder={false} />
        </TeacherContextProvider>
      </StudentContextProvider>
    </AuthContextProvider>
  </DarkModeContextProvider>
);
