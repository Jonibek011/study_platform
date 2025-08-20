import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoutes from "./protect/ProtectedRoutes";
import TeacherLayouts from "./layouts/TeacherLayouts";
import StudentLayouts from "./layouts/StudentLayouts";
import { Dashboard } from "./pages/teachers";
import { AsosiyStudent } from "./pages/students";
//loading component
import Loading from "./components/loadings/Loading";
//import react lazy
import { lazy, Suspense } from "react";
//lazy load for student
const ChatlarStudent = lazy(() => import("./pages/students/ChatlarStudent"));
const DarslarStudent = lazy(() => import("./pages/students/DarslarStudent"));
const TestlarStudent = lazy(() => import("./pages/students/TestlarStudent"));
const VazifalarStudent = lazy(() =>
  import("./pages/students/VazifalarStudent")
);

//lazy load for teacher
const ChatlarTeacher = lazy(() => import("./pages/teachers/ChatlarTeacher"));
const DarsYaratish = lazy(() => import("./pages/teachers/DarsYaratish"));
const TestYaratish = lazy(() => import("./pages/teachers/TestYaratish"));
const VazifaYaratish = lazy(() => import("./pages/teachers/VazifaYaratish"));

//import register pages
import Login from "./pages/register/Login";
import SignUp from "./pages/register/SignUp";

// import page not found
import PageNotFound from "./components/pageNotFound/PageNotFound";

//main function
function App() {
  const routes = createBrowserRouter([
    {
      path: "student",
      element: <ProtectedRoutes role="student" />,
      children: [
        {
          element: <StudentLayouts />,
          children: [
            {
              index: true,
              element: <AsosiyStudent />,
            },
            {
              path: "darslar",
              element: (
                <Suspense fallback={<Loading size="lg" />}>
                  <DarslarStudent />
                </Suspense>
              ),
            },
            {
              path: "testlar",
              element: (
                <Suspense fallback={<Loading size="lg" />}>
                  <TestlarStudent />
                </Suspense>
              ),
            },
            {
              path: "vazifalar",
              element: (
                <Suspense fallback={<Loading size="lg" />}>
                  <VazifalarStudent />
                </Suspense>
              ),
            },
            {
              path: "chatlar",
              element: (
                <Suspense fallback={<Loading size="lg" />}>
                  <ChatlarStudent />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "teacher",
      element: <ProtectedRoutes role="teacher" />,
      children: [
        {
          element: <TeacherLayouts />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
            {
              path: "darslar",
              element: (
                <Suspense fallback={<Loading size="lg" />}>
                  <DarsYaratish />
                </Suspense>
              ),
            },
            {
              path: "testlar",
              element: (
                <Suspense fallback={<Loading size="lg" />}>
                  <TestYaratish />
                </Suspense>
              ),
            },
            {
              path: "chatlar",
              element: (
                <Suspense fallback={<Loading size="lg" />}>
                  <ChatlarTeacher />
                </Suspense>
              ),
            },
            {
              path: "vazifalar",
              element: (
                <Suspense fallback={<Loading size="lg" />}>
                  <VazifaYaratish />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
