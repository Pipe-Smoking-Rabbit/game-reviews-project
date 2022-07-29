import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUser";
import { postComment } from "../../utils/api";
import "./Comments.css";

export default function PostComment({
  setCommentsList,
  review_id,
  setCommentCount,
}) {
  const {
    currentUser: { username },
  } = useContext(CurrentUserContext);
  const [newCommentBody, setNewCommentBody] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (newCommentBody.length) {
      const newComment = {
        author: username,
        created_at: "just now",
        body: newCommentBody,
        comment_id: Math.random(),
      };
      setCommentsList((currentCommentList) => {
        return [newComment, ...currentCommentList];
      });
      postComment(review_id, {
        username: newComment.author,
        body: newComment.body,
      });
      setNewCommentBody("");
      setCommentCount((previousCommentCount) => {
        return previousCommentCount + 1;
      });
    }
  }

  return (
    <section>
      <form className="Post-Comment" onSubmit={handleSubmit}>
        <label className="Post-Comment-Label" htmlFor="post_comment">
          {username} -
        </label>
        <textarea
          className="Post-Comment-Input"
          value={newCommentBody}
          onChange={(event) => {
            setNewCommentBody(event.target.value);
          }}
          type="post_comment"
          placeholder="Add a comment..."
        ></textarea>
        {newCommentBody ? (
          <button
            disabled={newCommentBody.length === 0}
            className="Post-Comment-Button"
            type="submit"
          >
            <img
              className="Post-Comment-Button-Image"
              src="https://cdn1.iconfinder.com/data/icons/outline-17/24/send-512.png"
              alt="send"
            />
          </button>
        ) : (
          <></>
        )}
      </form>
    </section>
  );
}
