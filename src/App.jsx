import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Categories from "./components/categories-components/Categories";
import ReviewsList from "./components/reviews-components/ReviewsList";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="" element={<ReviewsList />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/reviews/:category" element={<ReviewsList />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
