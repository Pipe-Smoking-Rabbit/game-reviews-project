import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AllReviews.css";
const axios = require("axios").default;

export default function ReviewsByCategory() {
  const [filteredReviewsList, setFilteredReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {category} = useParams();
  const peekPreviewRegex = /.{1,100}/s;

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

  if (isLoading)
    return (
      <div className="Page-Content Loading-Screen">
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-7a960949a5d51cf8b6ffef964d57feec"
          alt="Loading reviews..."
        />
      </div>
    );
  return (
    <div className="Page-Content Reviews-By-Category">
      <ul>{filteredReviewsList.map((review) => {
        return (
          <li className="Review-Card" key={review.review_id}>
            <div className="Review-Card-Info">
              <h3 className="Review-Card-Title">{review.title}</h3>
              <h4 className="Review-Card-Category">A {review.category} game</h4>
              <p className="Review-Card-Peek-Preview">
                {review.review_body.match(peekPreviewRegex)}...
              </p>
              <h5 className="Review-Card-Author">By {review.owner}</h5>
              <div className="Review-Card-Bottom-Row-Info">
                <h6 className="Review-Card-Date">{review.created_at}</h6>
                <h6 className="Review-Card-Kudos">{review.votes} Kudos</h6>
                <h6 className="Review-Card-Comments">
                  {review.comment_count} Comments
                </h6>
              </div>
            </div>
            <img className="Review-Card-Image" src={review.review_img_url} />
          </li>
        );
      })}</ul>
    </div>
  );
}
