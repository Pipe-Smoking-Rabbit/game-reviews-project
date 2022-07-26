import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AllReviews.css";
const axios = require("axios").default;

export default function SingleReview() {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();

  function fetchSingleReview() {
    setIsLoading(true);
    axios
      .get(
        `https://nc-my-game-reviews-project.herokuapp.com/api/reviews/${review_id}`
      )
      .then((response) => {
        setIsLoading(false);
        setReview(response.data.review);
        console.log(response.data.review)
      });
  }

  useEffect(() => {
    fetchSingleReview();
  }, []);

  return <div>SingleReview</div>;
}
