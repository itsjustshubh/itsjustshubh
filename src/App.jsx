import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import ScrollTop from "./components/scrolltop/scrollTop";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Works from "./pages/works/Works";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import NotFound from "./pages/notfound/NotFound";
import BlogPost from "./pages/blogpost/BlogPost";
import ProjectPage from "./pages/projectpage/ProjectPage";
import { projects } from "./content/projectsContent";
import { blogPosts } from "./content/blogContent";

function App() {
  const location = useLocation();
  const showFooter =
    location.pathname !== "/" && location.pathname !== "/contact";

  return (
    <>
      <ScrollTop />
      <Menu />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          {blogPosts.map((post) => (
            <Route
              path={`/blog/${post.slug}`}
              element={<BlogPost post={post} />}
              key={post.id}
            />
          ))}
          {projects.map((project, index) => {
            const nextProject = projects[(index + 1) % projects.length]; // Wrap around to the first project at the end
            return (
              <Route
                path={`/projects/${project.slug}`}
                element={
                  <ProjectPage project={project} nextProject={nextProject} />
                }
                key={project.id}
              />
            );
          })}
        </Routes>
      </AnimatePresence>
      {showFooter && <Footer />}
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
