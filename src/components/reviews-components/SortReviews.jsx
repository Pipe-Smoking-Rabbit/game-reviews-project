import { useState, useEffect } from "react";
import "./AllReviews.css";

export default function SortReviews({ setSortBy, setOrderBy }) {
  const [isSortEnabled, setIsSortEnabled] = useState(false);
  const [isOrderEnabled, setIsOrderEnabled] = useState(false);

  function handleSortClick(event) {
    setIsOrderEnabled(true);
    setSortBy(event.target.value);
  }

  function handleOrderClick(event) {
    setOrderBy(event.target.value);
  }

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
            <button
              value="title"
              onClick={handleSortClick}
              className="Sort-Title"
            >
              Title
            </button>
            <button
              value="owner"
              onClick={handleSortClick}
              className="Sort-Author"
            >
              Author
            </button>
            <button
              value="created_at"
              onClick={handleSortClick}
              className="Sort-Date"
            >
              Date
            </button>
            <button
              value="votes"
              onClick={handleSortClick}
              className="Sort-Kudos"
            >
              Kudos
            </button>
            <button
              value="comment_count"
              onClick={handleSortClick}
              className="Sort-Comments"
            >
              Comments
            </button>
          </div>
        ) : (
          <></>
        )}
      </section>
      {isOrderEnabled ? (
        <div className="Order-Section">
          <button
            value="ASC"
            onClick={handleOrderClick}
            className="Order-Ascending"
          >
            Ascending
          </button>
          <button
            value="DESC"
            onClick={handleOrderClick}
            className="Order-Descending"
          >
            Descending
          </button>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
