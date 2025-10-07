import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import MainPage from "./pages/MainPage";
import ResultsPage from "./pages/ResultsPage";

const App = () => {
  return (
    <Router
      future={{
        v7_startTransition: false,
        v7_relativeSplatPath: false,
      }}
    >
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
