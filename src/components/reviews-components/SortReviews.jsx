import { useState, useEffect } from "react";
import "./AllReviews.css";

export default function SortReviews() {
  const [isSortEnabled, setIsSortEnabled] = useState(false);
  const [isOrderEnabled, setIsOrderEnabled] = useState(false);

  return (
    <section className="Sort-And-Order-Section">
      <section className="Sort-Section">
        <button
          className="Sort-Enable-Button"
          onClick={() => {
            setIsSortEnabled(true);
          }}
        >
          Sort By...
        </button>
        {isSortEnabled ? (
          <div className="Sort-Options">
            <button className="Sort-Title">Title</button>
            <button className="Sort-Author">Author</button>
            <button className="Sort-Date">Date</button>
            <button className="Sort-Kudos">Kudos</button>
            <button className="Sort-Comments">Comments</button>
          </div>
        ) : (
          <></>
        )}
      </section>
      {isOrderEnabled ? (
        <div className="Order-Section">
          <button className="Order-Ascending">Ascending</button>
          <button className="Order-Descending">Descending</button>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
