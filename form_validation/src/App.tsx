
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import FormPage from "./components/zuppleform/formpagee/pageform";
import "./index.css";

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<FormPage />} />
        </Routes>
      
    </Router>
  );
}

export default App;
