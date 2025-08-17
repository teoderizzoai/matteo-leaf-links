// Using HashRouter instead of BrowserRouter for GitHub Pages compatibility
// HashRouter uses URL hashes (#) which don't require server-side routing support
// This is necessary because GitHub Pages only serves static files
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  // Simplified App component to test basic routing
  <HashRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

export default App;
