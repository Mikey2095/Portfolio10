import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { Preloader } from "./components/Preloader";
import { DetailPage } from "./pages/DetailPage";
import { AboutPage } from "./pages/AboutPage";
import { MoreProjectsPage } from "./pages/MoreProjectsPage";

function AnimatedRoutes() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/case-study/:id"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <DetailPage type="case-study" />
            </motion.div>
          }
        />
        <Route
          path="/project/:id"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <DetailPage type="project" />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutPage />
            </motion.div>
          }
        />
        <Route
          path="/more-projects"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MoreProjectsPage />
            </motion.div>
          }
        />
        <Route
          path="/creative-work/:id"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <DetailPage type="creative-work" />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
