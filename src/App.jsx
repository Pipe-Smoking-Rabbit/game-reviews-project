import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AllReviews from "./components/AllReviews";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<AllReviews />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
