import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [userdata, setUserdata] = useState({});

  const { user,dispatch } = useContext(AuthContext);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3300/login/success", {
        withCredentials: true,
      });

      console.log(response.data.user)

      setUserdata(response.data.user);
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);

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
          <span className="logo">Wander Lust</span>
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
            <button className="navButton" onClick={handleRegister}>
              Register
            </button>
            <button className="navButton" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}

        {/* {user ? user.username : (
            <div className="navItems">
              <button className="navButton" onClick={handleRegister}>
                Register
              </button>
              <button className="navButton" onClick={handleLogin}>
                Login
              </button> 
              </div>
          )} */}
      </div>
    </div>
  );
};

export default Navbar;

// import { Link, useNavigate } from "react-router-dom";
// import "./navbar.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Navbar = () => {
//   const [user, setUser] = useState(null);
//   const [sessionToken, setSessionToken] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch user information and session token when component mounts
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("/api/user");
//         console.log("Hello",response)
//         setUser(response.data.user);
//         setSessionToken(response.data.sessionToken);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       // Call logout API endpoint to destroy session
//       await axios.post("/logout");
//       // Clear user and session token from state
//       setUser(null);
//       setSessionToken(null);
//       // Redirect to login page
//       navigate("/login");
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   const handleLogin = () => {
//     navigate("/login");
//   };

//   const handleRegister = () => {
//     navigate("/register");
//   };

//   const profileUpdate = () => {
//     navigate("");
//   };

//   const profileView = () => {
//     navigate("");
//   };

//   const changePassword = () => {
//     navigate("");
//   };

//   return (
//     <div className="navbar">
//       <div className="navContainer">
//         <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
//           <span className="logo">Wander Lust</span>
//         </Link>
//         <div className="navItems">
//           {user ? (
//             <>
//               <div className="dropdown">
//                 <button className="dropbtn">Profile</button>
//                 <div className="dropdown-content">
//                   <button onClick={profileUpdate}>Profile Update</button>
//                   <button onClick={profileView}>Profile View</button>
//                   <button onClick={changePassword}>Change Password</button>
//                 </div>
//               </div>
//               <button className="navButton" onClick={handleLogout}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <button className="navButton" onClick={handleRegister}>
//                 Register
//               </button>
//               <button className="navButton" onClick={handleLogin}>
//                 Login
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
