// App component - Main application wrapper with routing
// Using HashRouter instead of BrowserRouter for GitHub Pages compatibility
// HashRouter uses URL hashes (#) which don't require server-side routing support
// This is necessary because GitHub Pages only serves static files
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const App = () => (
  <HashRouter>
    <Routes>
      {/* Main landing page route */}
      <Route path="/" element={<Index />} />
      
      {/* Portfolio route */}
      <Route path="/portfolio" element={<Portfolio />} />
      
      {/* Catch-all route for 404 errors - must be last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

export default App;
