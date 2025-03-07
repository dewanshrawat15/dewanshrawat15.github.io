import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";
import { RouterLoader } from "./components/router-loader";

const LandingPage = lazy(() => import("./pages/landing"));
const BlogPage = lazy(() => import("./pages/blog"));
const ProjectsPage = lazy(() => import("./pages/projects"));
const ExperiencePage = lazy(() => import("./pages/experience"));
const RouteNotFoundPage = lazy(() => import("./pages/not-found"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/experience",
    element: <ExperiencePage />,
  },
  {
    path: "*",
    element: <RouteNotFoundPage />,
  },
]);

export const App = () => {
  return (
    <Suspense fallback={<RouterLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
