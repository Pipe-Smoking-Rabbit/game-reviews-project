import { useState, useEffect } from "react";
import { fetchComments } from "../../utils/api";
import "./Comments.css";
import PostComment from "./PostComment";

export default function ViewComments({ review_id, setCommentCount }) {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchComments(review_id).then((response) => {
      setCommentsList(response.data.comments.reverse());
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <div>
        <img
          className="Comment-Section-Buffering"
          src="https://qph.cf2.quoracdn.net/main-qimg-7a960949a5d51cf8b6ffef964d57feec"
          alt="Loading comments..."
        />
      </div>
    );
  return (
    <section className="Comment-Section">
      <PostComment
        review_id={review_id}
        setCommentsList={setCommentsList}
        setCommentCount={setCommentCount}
      />
      <ul>
        {commentsList.map((comment) => {
          return (
            <li className="Comment-Card" key={comment.comment_id}>
              <h6 className="Comment-Card-Author">{comment.author} -</h6>
              <h6 className="Comment-Card-Date">{comment.created_at}</h6>
              <p className="Comment-Card-Body">{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
