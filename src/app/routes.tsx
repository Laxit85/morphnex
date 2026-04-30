import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { MeetTheTeam } from "./pages/MeetTheTeam";
import { Blog } from "./pages/Blog";
import { Services } from "./pages/Services";
import { CaseStudies } from "./pages/CaseStudies";
import { Career } from "./pages/Career";
import { ContactUs } from "./pages/ContactUs";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutUs },
      { path: "team", Component: MeetTheTeam },
      { path: "blog", Component: Blog },
      { path: "services", Component: Services },
      { path: "case-studies", Component: CaseStudies },
      { path: "career", Component: Career },
      { path: "contact", Component: ContactUs },
      { path: "*", Component: NotFound },
    ],
  },
]);
