import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import { fetchCategories } from "../../utils/api";

export default function Categories() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCategories().then((response) => {
      setIsLoading(false);
      setCategoriesList(response.data.categories);
    });
  }, []);

  if (isLoading)
    return (
      <div className="Page-Content">
        <div className="Category-Card"></div>
        <div className="Category-Card"></div>
        <div className="Category-Card"></div>
      </div>
    );
  return (
    <div className="Page-Content Categories">
      <ul>
        {categoriesList.map((category) => {
          return (
            <Link
              className="Card-Link"
              to={`/reviews/${category.slug}`}
              key={category.slug}
            >
              <li className="Category-Card">
                <img
                  className="Category-Image"
                  src={category.category_img_url}
                  alt=""
                />
                <h3 className="Category-Card-Name">
                  {category.slug.toUpperCase()}
                </h3>
                {/* <p className="Category-Card-Description">
                  {category.description}
                </p> */}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
