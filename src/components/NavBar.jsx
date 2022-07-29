import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { CurrentUserContext } from '../contexts/CurrentUser';

export default function NavBar() {
  const {currentUser, setCurrentUser} = useContext(CurrentUserContext)

  return (
    <nav className="Nav-Bar">
      <Link className="Nav-Link" to={"/categories"}>
        <button className="Nav-Bar-Category-Button">Categories</button>
      </Link>
      <Link className="Nav-Link" to={""}>
        <button className="Nav-Bar-Reviews-Button">Reviews</button>
      </Link>
      <Link className="Nav-Link" to={"/users"}>
        {
          <button className="Nav-Bar-Users-Button">
            Switch User
            <img className="Nav-Bar-Avatar" src={currentUser.avatar_url} />
          </button>
        }
      </Link>
    </nav>
  );
}
