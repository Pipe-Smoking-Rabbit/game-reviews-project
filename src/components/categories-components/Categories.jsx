import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
const axios = require("axios").default;

export default function Categories() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetchCategories() {
    setIsLoading(true);
    axios
      .get(`https://nc-my-game-reviews-project.herokuapp.com/api/categories`)
      .then((response) => {
        setIsLoading(false);
        setCategoriesList(response.data.categories);
      });
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  if (isLoading)
    return (
      <div className="Page-Content Loading-Screen">
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-7a960949a5d51cf8b6ffef964d57feec"
          alt="Loading reviews..."
        />
      </div>
    );
  return (
    <div className="Page-Content Categories">
      <ul>
        {categoriesList.map((category) => {
          return (
            <Link className="Link" to={`/reviews/${category.slug}`}>
              <li className="Category-Card">
                <h3 className="Category-Card-Name">
                  {category.slug.toUpperCase()}
                </h3>
                <p className="Category-Card-Description">
                  {category.description}
                </p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
