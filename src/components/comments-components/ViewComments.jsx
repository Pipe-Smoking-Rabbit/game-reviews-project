import { useState, useEffect, useContext } from "react";
import { fetchComments, removeComment } from "../../utils/api";
import displayDate from "../../functions/displayDate";
import "./Comments.css";
import PostComment from "./PostComment";
import { UserContext } from "../../contexts/CurrentUser";

export default function ViewComments({ review_id, setCommentCount }) {
  const { user } = useContext(UserContext);
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchComments(review_id).then((response) => {
      setCommentsList(response.data.comments.reverse());
      setIsLoading(false);
    });
  }, [review_id]);

  const deleteComment = (comment_id) => {
    removeComment(comment_id).then(() => {
      setCommentsList((currentComments) =>
        currentComments.filter((comment) => comment.comment_id !== comment_id)
      );
      setCommentCount((previousCount) => previousCount - 1);
    });
  };

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
              <h6 className="Comment-Card-Date">
                {displayDate(comment.created_at)}
              </h6>
              <p className="Comment-Card-Body">{comment.body}</p>
              {user.username === comment.author ? (
                <button onClick={() => deleteComment(comment.comment_id)}>
                  delete
                </button>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
