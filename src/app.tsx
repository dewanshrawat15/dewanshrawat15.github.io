import { BrowserRouter, Route, Routes } from "react-router";
import { LandingPage } from "./pages/landing";
import { BlogPage } from "./pages/blog";
import { ProjectsPage } from "./pages/projects";
import { ExperiencePage } from "./pages/experience";
import { RouteNotFoundPage } from "./pages/not-found";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="*" element={<RouteNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
