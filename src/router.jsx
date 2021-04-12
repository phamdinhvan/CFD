import MainLayout from "./layout/MainLayout";
import Home from "./pages/home";
import Profile from "./pages/Profiles";
import Payment from "./pages/Payment";
import Team from "./pages/Team";
import RegisterPage from "./pages/register";
import ProjectPage from "./pages/project";
import CoursePage from "./pages/course";
import CoopPage from "./pages/co-op";
import CourseDetail from "./pages/course-detail";
import QA from "./pages/QA";
import Page404 from "./pages/page404";
import Email from "./pages/email/email";
import YourCourse from "./pages/Profiles/components/YourCourse";
import Info from "./pages/Profiles/components/Info";
import PaymentHistory from "./pages/Profiles/components/PaymentHistory";
import CoinManagement from "./pages/Profiles/components/CoinManagement";
import Course from "./pages/Profiles/components/Course";
import TestCount from "./pages/count/countTest";

const routers = [
  {
    path: "/email",
    component: Email,
    exact: true,
  },
  {
    path: "/",
    component: MainLayout,
    routers: [
      {
        path: "/contact",
        component: CoopPage,
      },
      {
        path: "/team",
        component: Team,
      },
      {
        path: "/courses",
        component: CoursePage,
      },
      {
        path: "/profile/",
        component: Profile,
        auth: true,
        routers: [
          {
            path: "your-course",
            component: YourCourse,
          },
          {
            path: "project",
            component: Course,
          },
          {
            path: "history-payment",
            component: PaymentHistory,
          },
          {
            path: "coin-management",
            component: CoinManagement,
          },
          {
            path: "info",
            component: Info,
          },
        ],
      },
      {
        path: "/test",
        component: TestCount,
        exact: true,
      },
      {
        path: "/course/:slug/",
        component: CourseDetail,
      },
      {
        path: "/payment",
        component: Payment,
      },
      {
        path: "/question",
        component: QA,
      },

      {
        path: "/register/:slug/",
        component: RegisterPage,
      },
      {
        path: "/project",
        component: ProjectPage,
      },
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        component: Page404,
      },
    ],
  },
];
export default routers;
