import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./AllReviews.css";
const axios = require("axios").default;

export default function ReviewsByCategory() {
  const [filteredReviewsList, setFilteredReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const peekPreviewRegex = /.{1,100}/s;
  const categoryFilterRegex = /[^/]+$/

  const {pathname} = useLocation();
  const category = pathname.match(categoryFilterRegex)[0]

  function fetchReviewsByCategory() {
    setIsLoading(true);
    axios
      .get(`https://nc-my-game-reviews-project.herokuapp.com/api/reviews?category=${category}`)
      .then((response) => {
        setIsLoading(false);
        setFilteredReviewsList(response.data.reviews);
      });
  }

  useEffect(() => {
    fetchReviewsByCategory();
  }, []);

  return (
    <div className="Page-Content Reviews-By-Category">
      <p>{JSON.stringify(filteredReviewsList)}</p>
      <p>{JSON.stringify(filteredReviewsList)}</p>
      <p>{JSON.stringify(filteredReviewsList)}</p>
      <p>{JSON.stringify(filteredReviewsList)}</p>
      <p>{JSON.stringify(filteredReviewsList)}</p>
      
    </div>
  );
}
