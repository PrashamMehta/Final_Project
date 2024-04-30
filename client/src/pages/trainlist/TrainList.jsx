import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import useFetch from "../../hooks/useFetch";
import { SearchContextTrain } from "../../context/SearchContextTrain";
import TrainDetails from "../../components/TrainDetails/trainDetails";
import Header1 from "../../components/header/HeaderTrain";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const List1 = () => {
  const location = useLocation();
  const [sourcecity, setSourcecity] = useState(location.state.sourcecity);
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `trains/getTrainsBetweenStations?startingStation=${sourcecity}&destinationStation=${destination}&date=${dates}`
  );

  

  const { dispatch } = useContext(SearchContextTrain);
  const handleClick = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { sourcecity, destination, dates, options },
    });
  };

  return (
    <div>
      <Navbar />
      <Header1 type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Source</label>
              <input
                placeholder={sourcecity}
                onChange={(e) => setSourcecity(e.target.value)}
                type="text"
              />
            </div>
            <div className="lsItem">
              <label>Destination</label>
              <input
                placeholder={destination}
                onChange={(e) => setDestination(e.target.value)}
                type="text"
              />
            </div>
            <div className="input-control">
              <DatePicker
                id="date"
                placeholderText="Enter A Date"
                selected={dates}
                dateFormat="yyyy/MM/dd"
                onChange={(date) => setDates(date)}
              />
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <TrainDetails item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
    </div>
  );
};

export default List1;
