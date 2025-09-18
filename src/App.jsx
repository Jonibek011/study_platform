import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import ProtectedRoutes from "./protect/ProtectedRoutes";
import TeacherLayouts from "./layouts/TeacherLayouts";
import StudentLayouts from "./layouts/StudentLayouts";
import { Dashboard } from "./pages/teachers";
import { AsosiyStudent } from "./pages/students";
//loading component
import Loading from "./components/loadings/Loading";
import StudentDashboardChart from "./components/charts/StudentDashboardChart";
import ReytingBoard from "./components/student/ReytingBoard";
//import react lazy
import { lazy, Suspense } from "react";
//lazy load for student
const ChatlarStudent = lazy(() => import("./pages/students/ChatlarStudent"));
const DarslarStudent = lazy(() => import("./pages/students/DarslarStudent"));
const TestlarStudent = lazy(() => import("./pages/students/TestlarStudent"));
const VazifalarStudent = lazy(() =>
  import("./pages/students/VazifalarStudent")
);
const TeacherInfo = lazy(() => import("./pages/students/TeacherInfo"));

import DarslarOpen from "./pages/students/DarslarOpen";

//lazy load for teacher
const ChatlarTeacher = lazy(() => import("./pages/teachers/ChatlarTeacher"));
const DarsYaratish = lazy(() => import("./pages/teachers/DarsYaratish"));
const TestYaratish = lazy(() => import("./pages/teachers/TestYaratish"));
const VazifaYaratish = lazy(() => import("./pages/teachers/VazifaYaratish"));
const DarsYaratishStep1 = lazy(() =>
  import("./pages/teachers/DarsYaratishStep1")
);
const DarsYaratishStep2 = lazy(() =>
  import("./pages/teachers/DarsYaratishStep2")
);
const DarsYaratishStep3 = lazy(() =>
  import("./pages/teachers/DarsYaratishStep3")
);
//import register pages
import LoginStep1 from "./pages/register/login/LoginStep1";
import SignUpStep1 from "./pages/register/SignUpStep1";
import SignUpStep2 from "./pages/register/signup/SignUpStep2";
import SignUpStep3 from "./pages/register/signup/SignUpStep3";
import SignUpStep4 from "./pages/register/signup/SignUpStep4";

// import page not found
import PageNotFound from "./components/pageNotFound/PageNotFound";
import LoginStep2 from "./pages/register/login/LoginStep2";

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
              path: "",
              element: <AsosiyStudent />,
              children: [
                {
                  index: true,
                  element: <ReytingBoard />,
                },
                {
                  path: "reyting",
                  element: <ReytingBoard />,
                },
                {
                  path: "studentChart",
                  element: <StudentDashboardChart />,
                },
              ],
            },
            {
              path: "darslar",
              element: (
                <Suspense fallback={<Loading size="xl" clasName="absolute " />}>
                  <DarslarStudent />
                </Suspense>
              ),
            },
            {
              path: "darslar/:id",
              element: <DarslarOpen />,
            },
            {
              path: "darslar/:id/teacher",
              element: (
                <Suspense fallback={<Loading size="xl" clasName="absolute " />}>
                  <TeacherInfo />
                </Suspense>
              ),
            },

            {
              path: "testlar",
              element: (
                <Suspense fallback={<Loading size="xl" clasName="absolute " />}>
                  <TestlarStudent />
                </Suspense>
              ),
            },
            {
              path: "vazifalar",
              element: (
                <Suspense fallback={<Loading size="xl" clasName="absolute " />}>
                  <VazifalarStudent />
                </Suspense>
              ),
            },
            {
              path: "chatlar",
              element: (
                <Suspense fallback={<Loading size="xl" clasName="absolute " />}>
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
                <Suspense fallback={<Loading size="xl" clasName="absolute " />}>
                  <DarsYaratish />
                </Suspense>
              ),
            },
            {
              path: "darslar/step1",
              element: (
                <Suspense fallback={<Loading size="xl" clasName="absolute " />}>
                  <DarsYaratishStep1 />
                </Suspense>
              ),
            },
            {
              path: "darslar/step2",
              element: (
                <Suspense fallback={<Loading size="xl" clasName="absolute " />}>
                  <DarsYaratishStep2 />
                </Suspense>
              ),
            },
            {
              path: "darslar/step3",
              element: (
                <Suspense fallback={<Loading size="xl" clasName="absolute " />}>
                  <DarsYaratishStep3 />
                </Suspense>
              ),
            },
            {
              path: "testlar",
              element: (
                <Suspense fallback={<Loading size="xl" clasName="absolute " />}>
                  <TestYaratish />
                </Suspense>
              ),
            },
            {
              path: "chatlar",
              element: (
                <Suspense fallback={<Loading size="xl" clasName="absolute " />}>
                  <ChatlarTeacher />
                </Suspense>
              ),
            },
            {
              path: "vazifalar",
              element: (
                <Suspense fallback={<Loading size="xl" clasName="absolute " />}>
                  <VazifaYaratish />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "/auth/login",
      element: <LoginStep1 />,
    },
    {
      path: "/auth/login/verify-otp",
      element: <LoginStep2 />,
    },
    {
      path: "auth/step/send-otp",
      element: <SignUpStep1 />,
    },
    {
      path: "auth/step/verify-otp",
      element: <SignUpStep2 />,
    },
    {
      path: "auth/step/set-name",
      element: <SignUpStep3 />,
    },
    {
      path: "auth/step/set-role",
      element: <SignUpStep4 />,
    },
    {
      path: "/",
      element: <Navigate to="/auth/login" replace />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
