import { faCalendarDays, faTrain, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext} from "../../context/SearchContext.js";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext.js";
import Calender1, {calendar1} from "../train/calendar.jsx"

const Header = ({ type }) => {
  const [sourceStation, setSourceStation] = useState("");
  const [destinationStation, setDestinationStation] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);

  const navigate = useNavigate();

  const { dispatch } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  
  const handleSearch = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { sourceStation, destinationStation, date, passengers }
    });
    
    navigate("/trains", {
      state: { sourceStation, destinationStation, date, passengers }
    });
  };

  const activePage = 'Train Booking'; 
 
  return (
    
    <div> 
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <button className={`headerListItem ${activePage === 'Train Booking' ? 'active' : ''}`}>
              <FontAwesomeIcon icon={faTrain} />
              <span>Train Booking</span>
            </button>
          </div>
          
          {type !== "list" && (
            <>
              <h1 className="headerTitle">Book Your Train Journey</h1>
              {!user && <button className="headerBtn">Sign in / Register</button>}
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <input
                    type="text"
                    placeholder="From"
                    className="headerSearchInput"
                    value={sourceStation}
                    onChange={(e) => setSourceStation(e.target.value)}
                  />
                </div>
                <div className="headerSearchItem">
                  <input
                    type="text"
                    placeholder="To"
                    className="headerSearchInput"
                    value={destinationStation}
                    onChange={(e) => setDestinationStation(e.target.value)}
                  />
                </div> 

                <div>
                  <Calender1/>
                </div>   

              <div>            
                  <button className="headerBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div> 
  );
};

export default Header;
