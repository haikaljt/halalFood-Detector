
import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import HomePage from "./pages/HomePage";
import ScannerPage from "./pages/ScannerPage";
import ResultPage from "./pages/ResultPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/scanner" element={<ScannerPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
