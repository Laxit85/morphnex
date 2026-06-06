import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        lazy: () => import("./pages/Home").then((m) => ({ Component: m.Home })),
      },
      {
        path: "about",
        lazy: () => import("./pages/AboutUs").then((m) => ({ Component: m.AboutUs })),
      },
      {
        path: "team",
        lazy: () => import("./pages/MeetTheTeam").then((m) => ({ Component: m.MeetTheTeam })),
      },
      {
        path: "blog",
        lazy: () => import("./pages/Blog").then((m) => ({ Component: m.Blog })),
      },
      {
        path: "blog/:slug",
        lazy: () => import("./pages/BlogPost").then((m) => ({ Component: m.BlogPost })),
      },
      {
        path: "services",
        lazy: () => import("./pages/Services").then((m) => ({ Component: m.Services })),
      },
      {
        path: "case-studies",
        lazy: () => import("./pages/CaseStudies").then((m) => ({ Component: m.CaseStudies })),
      },
      {
        path: "case-studies/:slug",
        lazy: () => import("./pages/CaseStudyPost").then((m) => ({ Component: m.CaseStudyPost })),
      },
      {
        path: "career",
        lazy: () => import("./pages/Career").then((m) => ({ Component: m.Career })),
      },
      {
        path: "contact",
        lazy: () => import("./pages/ContactUs").then((m) => ({ Component: m.ContactUs })),
      },
      {
        path: "*",
        lazy: () => import("./pages/NotFound").then((m) => ({ Component: m.NotFound })),
      },
    ],
  },
]);
