import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Work from "./pages/Work";
import CaseStudyPage from "./pages/CaseStudyPage";
import CaseStudyTest from "./pages/CaseStudyTest";

function App() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/misc" element={<Navigate to="/" replace />} />
          <Route path="/test" element={<CaseStudyTest />} />
          <Route path="/:projectSlug" element={<CaseStudyPage />} />
        </Routes>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
