import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? (
          <div className="navItems">
            <span className="navUsername">{user.username}</span>
            <button className="navButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={handleRegister}>Register</button>
            <button className="navButton" onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
