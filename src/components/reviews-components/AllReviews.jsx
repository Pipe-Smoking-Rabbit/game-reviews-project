import { useState, useEffect } from "react";
import "./AllReviews.css"
const axios = require("axios").default

export default function AllReviews() {
  const [reviewsList, setReviewsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const peekPreviewRegex = /.{1,100}/s;

  function fetchReviews () {
    setIsLoading(true)
    axios.get(`https://nc-my-game-reviews-project.herokuapp.com/api/reviews`).then(response=>{
      setIsLoading(false);
      setReviewsList(response.data.reviews)
    });
  }

  useEffect(()=>{
    fetchReviews()
  }, [])

  if (isLoading) return <p>Fetching reviews...</p>
  return (
    <div className="Page-Content All-Reviews">
      <ul>
        {
          reviewsList.map(review=>{
            return (
              <li className="Review-Card" key={review.review_id}>
                <h3 className="Review-Card-Title">{review.title}</h3>
                <h4 className="Review-Card-Category">A {review.category} game</h4>
                <p className="Review-Card-Peek-Preview">{review.review_body.match(peekPreviewRegex)}...</p>
                <h5>By {review.owner}</h5>
                <h5>{review.created_at}</h5>
                <img src={review.review_img_url}/>
                <h6>{review.votes} Kudos</h6>
                <h6>{review.comment_count} Comments</h6>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
