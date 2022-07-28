const axios = require ("axios").default

export function patchVotes(review_id, patch) {
    axios.patch(`https://nc-my-game-reviews-project.herokuapp.com/api/reviews/${review_id}`, patch);
}

export function fetchComments(review_id) {
    return axios.get(`https://nc-my-game-reviews-project.herokuapp.com/api/reviews/${review_id}/comments`)
}

export function fetchUsers(){
    return axios.get(`https://nc-my-game-reviews-project.herokuapp.com/api/users`);
}