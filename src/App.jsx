import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AllReviews from "./components/reviews-components/AllReviews";
import Categories from "./components/categories-components/Categories";
import ReviewsByCategory from "./components/reviews-components/ReviewsByCategory";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="" element={<AllReviews />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/reviews/*" element={<ReviewsByCategory />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
