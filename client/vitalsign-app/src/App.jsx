import "bootstrap/dist/css/bootstrap.min.css";
import VitalSign from "./components/VitalSign";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import VitalSignForm from "./components/VitalSignForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<VitalSign />} />
          <Route path="/addVitalSign" element={<VitalSignForm />} />
          <Route path="/edit/:id" element={<VitalSignForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
