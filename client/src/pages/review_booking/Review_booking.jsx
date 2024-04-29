import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./review_booking.css";

const ReviewBooking = ({ hotelName, checkInDate, checkOutDate, fare }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handlePay = () => {
    // Redirect to payment gateway
    // Implement payment gateway redirection logic here
    navigate("/payment"); // Redirecting to payment gateway route for demonstration
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
              <h2>The Ashok</h2>
            </div>
            <p>★★★★★</p>
            <p>50-B, Diplomatic Enclave, Chanakyapuri, Delhi, India</p>
            <hr></hr>
            <div className="details">
              <div className="checkin">
                <h3>CHECK IN</h3>
                <p>Tue 30 Apr 2024</p>
                <p>2 PM</p>
              </div>
              <span>| 1 NIGHT |</span>
              <div className="checkout">
                <h3>CHECK OUT</h3>
                <p>Wed 1 May 2024</p>
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
            <p>Total Fare: ${fare}</p>
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
