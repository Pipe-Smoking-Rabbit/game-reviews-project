const axios = require("axios").default;

const api = axios.create({
  baseURL: "https://rabbit-reviews.onrender.com/api",
});

export function patchVotes(review_id, patch) {
  return api.patch(`/reviews/${review_id}`, patch);
}

export function fetchComments(review_id) {
  return api.get(`/reviews/${review_id}/comments`);
}

export function fetchUsers() {
  return api.get(`/users`);
}

export function postComment(review_id, post) {
  return api.post(`/reviews/${review_id}/comments`, post);
}

export function fetchReviews(category, sort_by, order) {
  return api.get(`/reviews`, {
    params: { category, sort_by, order },
  });
}

export function fetchCategories() {
  return api.get(`/categories`);
}

export function fetchSingleReview(review_id) {
  return api.get(`/reviews/${review_id}`);
}
