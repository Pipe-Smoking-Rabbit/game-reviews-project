import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="Nav-Bar">
      <Link className="Nav-Link" to={"/categories"}>
        <button className="Nav-Bar-Category-Button">Categories</button>
      </Link>
      <Link className="Nav-Link" to={""}>
        <button className="Nav-Bar-Reviews-Button">Reviews</button>
      </Link>
      <Link className="Nav-Link" to={"/users"}>
        <button className="Nav-Bar-Users-Button">Switch User</button>
      </Link>
    </nav>
  );
}
