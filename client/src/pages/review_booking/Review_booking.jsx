import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./review_booking.css";
import { SearchContext } from "../../context/SearchContext";
import { format } from "date-fns";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
 
const ReviewBooking = ({ fare }) => {
  const location = useLocation();
  const { hotelId, totalFare, selectedRooms } = location.state;
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();
  const{data} = useFetch(`/hotels/find/${hotelId}`)

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);


  const handlePay = async() => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      navigate("/payment"); 
    } catch (err) {}
  };

  return (
    <div className="Review_Booking">
      <Navbar />
      {/*--------------------------------------------------------------------------------------------*/}
      <div className="header">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
      </div>
      {/*--------------------------------------------------------------------------------------------*/}
      <div className="heading1">
        <h1>Review Your Booking</h1>
      </div>
      {/*--------------------------------------------------------------------------------------------*/}
      <div className="bigcontainer">
        {/*--------------------------------------------------------------------------------------------*/}
        <div className="vertical1">
          <div className="binformation">
            <div className="header1">
              <h2>{data.name}</h2>
            </div>
            <p>{data.rating}★</p>
            <p>{data.address}</p>
            <hr></hr>
            <div className="details">
              <div className="checkin">
                <h3>CHECK IN</h3>
                <p>{`${format(
                dates[0].startDate,
                "dd/MM/yyyy"
              )}`}</p>
                <p>2 PM</p>
              </div>
              <span>| 1 NIGHT |</span>
              <div className="checkout">
                <h3>CHECK OUT</h3>
                <p>{`${format(dates[0].endDate, "dd/MM/yyyy")}`}</p>
                <p>12 PM</p>
                <div className="stayinfo">1 Night | 2 Adults | 1 Room</div>
              </div>
            </div>
          </div>
          <div className="guestcontainer">
            <h2>Guest Details</h2>
            <form>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </form>
            <button class="add-guest-btn">+ Add Guest</button>
          </div>
          <div className="tccontainer">
            <h2>Terms & Conditions</h2>
            <label>
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              I have read and agree to the Terms & Conditions
            </label>
          </div>
        </div>
        {/*--------------------------------------------------------------------------------------------*/}
        <div className="verticale2">
          <div className="bookingsum">
            <h2>Booking Summary</h2>
            <hr></hr>
            <p>Total Fare: ₹{totalFare}</p>
          </div>
        </div>
{/*--------------------------------------------------------------------------------------------*/}     
        <div className="paybutton">
          <button disabled={!agreeTerms} onClick={handlePay}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewBooking;
