import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";
import { RouterLoader } from "./components/router-loader";

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const lazyWithDelay = <T extends React.ComponentType<any>>(
  importPromise: Promise<{ default: T }>
): React.LazyExoticComponent<T> => {
  return lazy<T>(async () => {
    try {
      await delay(1000);
      return await importPromise;
    } catch (error) {
      console.error("Lazy loading error:", error);
      throw error;
    }
  });
};

const LandingPage = lazyWithDelay(
  import("./pages/landing").then((module) => ({ default: module.default }))
);
const BlogPage = lazyWithDelay(
  import("./pages/blog").then((module) => ({ default: module.default }))
);
const ProjectsPage = lazyWithDelay(
  import("./pages/projects").then((module) => ({ default: module.default }))
);
const ExperiencePage = lazyWithDelay(
  import("./pages/experience").then((module) => ({ default: module.default }))
);
const BlogDetailPage = lazyWithDelay(
  import("./pages/blog-detail").then((module) => ({ default: module.default }))
);
const SignInPage = lazy(() => import("./pages/sign-in"));
const AdminPage = lazy(() => import("./pages/admin"));
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
    path: "/blog/:id",
    element: <BlogDetailPage />,
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
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
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
