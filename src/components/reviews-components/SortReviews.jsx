import { useState, useEffect } from "react";
import "./AllReviews.css";

export default function SortReviews({ sortBy, setSortBy, setOrderBy }) {
  const [isShowingSort, setIsShowingSort] = useState(false);
  const [sortEnableClassName, setSortEnableClassName] = useState(
    "Sort-Enable Sort-Button"
  );
  const [isOrderedAscending, setIsOrderedAscending] = useState(false);

  function handleSortClick(event) {
    setSortBy(event.target.value);
  }

  function handleOrderClick(event) {
    setOrderBy(event.target.value);
    setIsOrderedAscending(!isOrderedAscending);
  }

  return (
    <section className="Sort-And-Order-Section">
      <section className="Sort-Section">
        {isShowingSort ? (
          <div className="Sort-Options">
            <button
              value="title"
              disabled={sortBy === "title"}
              onClick={handleSortClick}
              className="Sort-Title Sort-Button"
            >
              Title
            </button>
            <button
              value="owner"
              disabled={sortBy === "owner"}
              onClick={handleSortClick}
              className="Sort-Author Sort-Button"
            >
              Author
            </button>
            <button
              value="created_at"
              disabled={sortBy === "created_at"}
              onClick={handleSortClick}
              className="Sort-Date Sort-Button"
            >
              Date
            </button>
            <button
              value="votes"
              disabled={sortBy === "votes"}
              onClick={handleSortClick}
              className="Sort-Kudos Sort-Button"
            >
              Kudos
            </button>
            <button
              value="comment_count"
              disabled={sortBy === "comment_count"}
              onClick={handleSortClick}
              className="Sort-Comments Sort-Button"
            >
              Comments
            </button>
          </div>
        ) : (
          <></>
        )}
        <button
          className={sortEnableClassName}
          onClick={() => {
            setIsShowingSort(!isShowingSort);
            if (!isShowingSort) {
              setSortEnableClassName("Sort-Enable-Active Sort-Button");
            } else {
              setSortEnableClassName("Sort-Enable Sort-Button");
            }
          }}
        >
          Sort By...
        </button>
      </section>
      {isShowingSort ? (
        <div className="Order-Section">
          <button
            value="ASC"
            disabled={isOrderedAscending}
            onClick={handleOrderClick}
            className="Order-Ascending Order-Button"
          >
            Ascending
          </button>
          <button
            value="DESC"
            disabled={!isOrderedAscending}
            onClick={handleOrderClick}
            className="Order-Descending Order-Button"
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
