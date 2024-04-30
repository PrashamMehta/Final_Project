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
import useFetch from "../../hooks/useFetch";
import { format } from "date-fns";





const ReviewBooking = ({  fare }) => {
  const location = useLocation();
  const { hotelId, totalFare, selectedRooms } = location.state;
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const {data} = useFetch(`/hotels/find/${hotelId}`);

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

  const totalrooms = selectedRooms.length;

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

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
        <h1 style={{ marginTop: '1rem'}}>Review Your Booking</h1>
          <div className="main_conatiner">
            <div className="details">
              <div className="HotelDetails">
                <div className="HotelTitle">{data.name}</div>
                  <div className="HotelRating">
                    <p>{data.rating}★</p>
                    <p style={{ color: '#6D6D6D', marginTop: '2px'}}>{data.address}</p>
                  </div>
                  <div className="HotelSchedule">
                    <div className="CheckInAndOut">
                      <div className="Inn">
                        <div className="InnTitle">CHECK IN</div>
                        <div className="InnDate" style={{fontSize: '15px', marginTop: '-2px'}}>Tue<span style={{ color: '#000', fontSize: '24px', fontWeight: '900'}}>{`${format(dates[0].startDate, "dd/MM/yyyy")}`}</span></div>
                        <div style={{ marginTop: '-1px',fontSize: '15px' }}>3 pm</div>
                      </div>
                      <div className="Outt">
                        <div className="OuttTitle">CHECK Out</div>
                        <div className="InnDate" style={{fontSize: '15px', marginTop: '-2px'}}>Wed<span style={{ color: '#000', fontSize: '24px', fontWeight: '900'}}>{`${format(dates[0].endDate, "dd/MM/yyyy")}`}</span></div>
                        <div style={{ marginTop: '-1px', fontSize: '15px'}}>12 pm</div>
                      </div>
                    </div>
                    <div className="GuestsDetails"><span style={{ fontWeight: '800', marginRight: '0.3rem'}}> {days} </span> Night | <span style={{ fontWeight: '800',marginLeft: '0.3rem', marginRight: '0.3rem'}}> 2 </span> Adults | <span style={{ fontWeight: '800', marginRight: '0.3rem', marginLeft: '0.3rem'}}> {totalrooms} </span> Room</div>
                  </div>
              </div>
              <div className="GuestDetails">
                <div className="GuestsTitle">Guests Details</div>
                <div className="GuestsForm">
                  <div className="username" style={{ marginTop: '.5rem'}}>
                    <input type="text" placeholder="Full Name" required className="userName"></input>
                  </div>
                  <div className="username" style={{ marginTop: '1rem'}}>
                    <input type="email" placeholder="Email" required className="email"></input>
                  </div>      
                </div>
                <div className="LoginToAccess">
                  <div>
                    You need to login in order to fill the details
                  </div>
                  <button className="LoginButton">
                    LOGIN
                  </button>
                </div>

                {/* <div className="GuestsForm">
                  <div className="GuestsFormInput">
                    <div className="GuestsFormInputTitle">Name:</div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="GuestsFormInput">
                    <div className="GuestsFormInputTitle">Email:</div>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div> */}
              </div>
              <div className="TnC">
                {/* <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} /> */}
                <input type="checkbox"/>
                <span style={{ marginLeft: '.5rem', fontSize: '14px'}}>
                I've read and agree to the 
                  <span style={{ color: 'blue', fontWeight: 'bold', marginLeft: '.2rem'}}>
                  Terms & Conditions
                  </span>
                </span>
              </div>
              <div className="PayNow">
                <button className="Pay" disabled={!agreeTerms} onClick={handlePay}>
                  PAY NOW
                </button>
              </div>
            </div>
            <div className="TotalFare">
              <div className="HotelTitle">Price Breakup</div>
              <div className="PriceDetails">
                <div className="PriceDetailsTitle">
                  <div className="wrapper">
                    <div className="basePrice">
                      <span style={{ color: '#000', fontWeight: '650', fontSize: '17px',paddingBottom: '14px'}}>{totalrooms} Rooms x {days} Night</span>
                      <span style={{ color: '#4a4a4a', fontWeight: '650', fontSize: '17px'}}>₹ {totalFare}</span>
                    </div>
                    <div className="hotelTaxes">
                      <span style={{ color: '#000', fontWeight: '650', fontSize: '17px',paddingBottom: '14px'}}>Hotel Taxes</span>
                      <span style={{ color: '#4a4a4a', fontWeight: '650', fontSize: '17px'}}>₹ 900</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="TotalAmount">
                <div className="hotelTaxes">
                  <span style={{ color: '#000', fontWeight: '650', fontSize: '17px',paddingBottom: '14px'}}>Total Amount to be paid</span>
                  <span style={{ color: '#4a4a4a', fontWeight: '650', fontSize: '17px'}}>₹ {totalFare+900}</span>
                </div>
              </div>

            </div>
        </div>
      </div>
      
      
      {/* <div className="bigcontainer" style={{marginTop: '20rem'}}>
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
        <div className="verticale2">
          <div className="bookingsum">
            <h2>Booking Summary</h2>
            <hr></hr>
            <p>Total Fare: ${fare}</p>
          </div>
        </div>
        <div className="paybutton">
          <button disabled={!agreeTerms} onClick={handlePay}>
            Pay Now
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ReviewBooking;
