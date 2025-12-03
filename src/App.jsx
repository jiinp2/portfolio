import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Work from "./pages/Work";
import Misc from "./pages/Misc";
import CaseStudyTest from "./pages/CaseStudyTest";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/misc" element={<Misc />} />
          <Route path="/test" element={<CaseStudyTest />} />
          <Route path="/:projectSlug" element={<Work />} />
        </Routes>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
