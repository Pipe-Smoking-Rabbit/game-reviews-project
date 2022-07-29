import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUser";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../utils/api";
import "./UserLogin.css";

export default function UserLogin() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext)
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers().then((response) => {
      setUsersList(response.data.users);
      setIsLoading(false);
    });
  }, []);
  
  function switchUser(user){
    setCurrentUser(user)
  }

  console.log(currentUser.avatar_url)

  if (isLoading)
    return (
      <div className="Page-Content">
        <img
          className="Loading-Screen"
          src="https://qph.cf2.quoracdn.net/main-qimg-7a960949a5d51cf8b6ffef964d57feec"
          alt="Loading reviews..."
        />
      </div>
    );
  return (
    <section className="Page-Content">
        <h2 className="User-Page-Subtitle">Who is looking at reviews?</h2>
      <ul>
        {usersList.map((user) => {
          return (
            <li className="User-Card" onClick={()=>{switchUser(user)}} key={user.username}>
              <Link className="Card-Link" to={"/"}>
                <img
                  className="User-Card-Image"
                  src={user.avatar_url}
                  alt="User avatar"
                />
                <h3 className="User-Card-Username">{user.username}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
