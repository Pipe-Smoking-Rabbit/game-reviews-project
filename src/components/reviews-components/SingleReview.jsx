import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import KudosSingleReview from "../kudos-components/KudosSingleReview";
import "./SingleReview.css";
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
      });
  }

  useEffect(() => {
    fetchSingleReview();
  }, []);

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
    <section className="Page-Content Single-Review">
      <header className="Single-Review-Header">
        <div className="Single-Review-Header-Info">
          <h2 className="Single-Review-Title">{review.title}</h2>
          <h5 className="Single-Review-Category">A {review.category} game</h5>
          <p className="Single-Review-Author">
            Posted by {review.owner}, on {review.created_at}
          </p>
        </div>
        <img className="Single-Review-Image" src={review.review_img_url} />
      </header>
      <p className="Single-Review-Body">{review.review_body}</p>
      <KudosSingleReview review={review} />
      <p className="Single-Review-Comments">
        {review.comment_count} Comments
      </p>
    </section>
  );
}
