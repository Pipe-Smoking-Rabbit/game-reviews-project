import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AllReviews from "./components/reviews-components/AllReviews";
import SingleReview from "./components/reviews-components/SingleReview";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="" element={<AllReviews />} />
          <Route path="/review/:review_id" element={<SingleReview />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
