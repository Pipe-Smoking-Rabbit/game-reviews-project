import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./AllReviews.css";
import SortReviews from "./SortReviews";
const axios = require("axios").default;

export default function ReviewsList() {
  const [reviewsList, setReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const peekPreviewRegex = /.{1,100}/s;

  function fetchReviews() {
    setIsLoading(true);
    axios
      .get(
        `https://nc-my-game-reviews-project.herokuapp.com/api/reviews`,
        { params: { category: category } }
      )
      .then((response) => {
        setIsLoading(false);
        setReviewsList(response.data.reviews);
      });
  }

  useEffect(() => {
    fetchReviews();
  }, [category]);

  if (isLoading)
    return (
      <div className="Page-Content">
        <img
          className="Loading-Screen"
          src="https://qph.cf2.quoracdn.net/main-qimg-7a960949a5d51cf8b6ffef964d57feec"
          alt="Loading reviews..."
        />
      </div>
    );
  return (
    <div className="Page-Content Reviews-By-Category">
      <SortReviews />
      <ul>
        {reviewsList.map((review) => {
          return (
            <Link className="Card-Link" to={`/review/${review.review_id}`}>
              <li className="Review-Card" key={review.review_id}>
                <div className="Review-Card-Info">
                  <h3 className="Review-Card-Title">{review.title}</h3>
                  <h4 className="Review-Card-Category">
                    A {review.category} game
                  </h4>
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
                <img
                  className="Review-Card-Image"
                  src={review.review_img_url}
                />
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
