import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { ErrorBoundary } from "./components/ErrorBoundary";

function safeLazy<T>(factory: () => Promise<T>): () => Promise<T> {
  return async () => {
    try {
      const module = await factory();
      if (typeof window !== "undefined") {
        sessionStorage.removeItem("morphnex_chunk_reload");
      }
      return module;
    } catch (error) {
      if (typeof window !== "undefined") {
        const hasReloaded = sessionStorage.getItem("morphnex_chunk_reload");
        if (!hasReloaded) {
          sessionStorage.setItem("morphnex_chunk_reload", "true");
          window.location.reload();
          return new Promise<T>(() => {});
        }
      }
      throw error;
    }
  };
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    ErrorBoundary: ErrorBoundary,
    children: [

      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        lazy: safeLazy(() => import("./pages/AboutUs").then((m) => ({ Component: m.AboutUs }))),
      },
      {
        path: "team",
        lazy: safeLazy(() => import("./pages/MeetTheTeam").then((m) => ({ Component: m.MeetTheTeam }))),
      },
      {
        path: "blog",
        lazy: safeLazy(() => import("./pages/Blog").then((m) => ({ Component: m.Blog }))),
      },
      {
        path: "blog/:slug",
        lazy: safeLazy(() => import("./pages/BlogPost").then((m) => ({ Component: m.BlogPost }))),
      },
      {
        path: "services",
        lazy: safeLazy(() => import("./pages/Services").then((m) => ({ Component: m.Services }))),
      },
      {
        path: "case-studies",
        lazy: safeLazy(() => import("./pages/CaseStudies").then((m) => ({ Component: m.CaseStudies }))),
      },
      {
        path: "case-studies/:slug",
        lazy: safeLazy(() => import("./pages/CaseStudyPost").then((m) => ({ Component: m.CaseStudyPost }))),
      },
      {
        path: "career",
        lazy: safeLazy(() => import("./pages/Career").then((m) => ({ Component: m.Career }))),
      },
      {
        path: "contact",
        lazy: safeLazy(() => import("./pages/ContactUs").then((m) => ({ Component: m.ContactUs }))),
      },
      {
        path: "terms",
        lazy: safeLazy(() => import("./pages/TermsAndConditions").then((m) => ({ Component: m.TermsAndConditions }))),
      },
      {
        path: "*",
        lazy: safeLazy(() => import("./pages/NotFound").then((m) => ({ Component: m.NotFound }))),
      },
    ],
  },
]);



