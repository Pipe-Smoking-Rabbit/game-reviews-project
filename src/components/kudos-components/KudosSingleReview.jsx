import { useState, useEffect } from "react";
import { patchVotes } from "../../utils/api";
import "./KudosSingleReview.css";
const axios = require("axios").default;

export default function KudosSingleReview({ review }) {
  const [kudos, setKudos] = useState(review.votes);
  const [isPlusDisabled, setIsPlusDisabled] = useState(false);
  const [isMinusDisabled, setIsMinusDisabled] = useState(false);
  const [plusButtonClassName, setPlusButtonClassName] =
    useState("Kudos-Button");
  const [minusButtonClassName, setMinusButtonClassName] =
    useState("Kudos-Button");
  const kudosPlus = { inc_votes: 1 };
  const kudosMinus = { inc_votes: -1 };

  function incrementKudos() {
    if (isPlusDisabled) {
      setKudos(kudos - 1);
      setPlusButtonClassName("Kudos-Button");
      patchVotes(review.review_id, kudosMinus);
    } else {
      setKudos(kudos + 1);
      setPlusButtonClassName("Kudos-Button Kudos-Plus-Button-Active");
      patchVotes(review.review_id, kudosPlus);
    }

    setIsPlusDisabled(!isPlusDisabled);
  }

  function decrementKudos() {
    if (isMinusDisabled) {
      setKudos(kudos + 1);
      setMinusButtonClassName("Kudos-Button");
      patchVotes(review.review_id, kudosPlus);
    } else {
      setKudos(kudos - 1);
      setMinusButtonClassName("Kudos-Button Kudos-Minus-Button-Active");
      patchVotes(review.review_id, kudosMinus);
    }
    setIsMinusDisabled(!isMinusDisabled);
  }
  
  return (
    <section className="Single-Review-Kudos">
      <button
        disabled={isMinusDisabled}
        className={plusButtonClassName}
        onClick={incrementKudos}
      >
        +
      </button>
      <p className="Kudos-Number-Text">{kudos} Kudos</p>
      <button
        disabled={isPlusDisabled}
        className={minusButtonClassName}
        onClick={decrementKudos}
      >
        -
      </button>
    </section>
  );
}
