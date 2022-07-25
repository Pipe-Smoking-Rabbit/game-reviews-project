import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="Nav-Bar">
      <button>
        <Link to={"/categories"}>Categories</Link>
      </button>
      <button>
        <Link to={"/home"}>Reviews</Link>
      </button>
      <button>
        <Link to={"/users"}>Switch User</Link>
      </button>
    </nav>
  );
}
