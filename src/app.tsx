import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

const LandingPage = lazy(() => import("./pages/landing"));
const BlogPage = lazy(() => import("./pages/blog"));
const ProjectsPage = lazy(() => import("./pages/projects"));
const ExperiencePage = lazy(() => import("./pages/experience"));
const RouteNotFoundPage = lazy(() => import("./pages/not-found"));

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="*" element={<RouteNotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
