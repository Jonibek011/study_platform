import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//importing context
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { StudentContextProvider } from "./context/StudentContext.jsx";
import { TeacherContextProvider } from "./context/TeacherContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <StudentContextProvider>
      <TeacherContextProvider>
        <App />
      </TeacherContextProvider>
    </StudentContextProvider>
  </AuthContextProvider>
);
