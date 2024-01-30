import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ViewComments from "../comments-components/ViewComments";
import KudosSingleReview from "../kudos-components/KudosSingleReview";
import displayDate from "../../functions/displayDate";
import "./SingleReview.css";
import { fetchSingleReview } from "../../utils/api";

export default function SingleReview() {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCommentsEnabled, setIsCommentsEnabled] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(review_id).then((response) => {
      setIsLoading(false);
      setReview(response.data.review);
      setCommentCount(+response.data.review.comment_count);
    });
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
            Posted by {review.owner}, <br />
            {displayDate(review.created_at)}
          </p>
        </div>
        <img className="Single-Review-Image" src={review.review_img_url} />
      </header>
      <p className="Single-Review-Body">{review.review_body}</p>
      <KudosSingleReview review={review} />
      <p className="Single-Review-Comments">{commentCount} Comments</p>
      {isCommentsEnabled ? (
        <></>
      ) : (
        <button
          className="View-Comments"
          onClick={() => {
            setIsCommentsEnabled(true);
          }}
        >
          View comments...
        </button>
      )}
      {isCommentsEnabled ? (
        <ViewComments review_id={review_id} setCommentCount={setCommentCount} />
      ) : (
        <></>
      )}
    </section>
  );
}
