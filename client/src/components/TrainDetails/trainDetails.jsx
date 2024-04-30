import React from 'react';
import './trainDetails.css';

function trainDetails() {
  return (
    <div>
<div className="single-train-detail single-train-padding">
      <div className="flex train-info">
        <div className="left-info flex flex-column">
          <div className="train-name">Shram Shkti Exp</div>
          <div className="flex train-depart-number">
            <div>#12452</div>
            <div style={{ margin: '0px 10px' }}>|</div>
            <div>
              Departs on : &nbsp;
              <span className="green">
                <b>S</b> &nbsp;
              </span>
              <span className="green">
                <b>M</b> &nbsp;
              </span>
              <span className="green">
                <b>T</b> &nbsp;
              </span>
              <span className="green">
                <b>W</b> &nbsp;
              </span>
              <span className="green">
                <b>T</b> &nbsp;
              </span>
              <span className="green">
                <b>F</b> &nbsp;
              </span>
              <span className="green">
                <b>S</b> &nbsp;
              </span>
            </div>
          </div>
        </div>
        <div className="right-info flex flex-column">
          <div className="flex">
            <div className="flex flex-column">
              <div className="depart-time">11:55 PM, Wed</div>
              <div className="station-name">New Delhi (NDLS)</div>
            </div>
            <div className="flex flex-column">
              <div className="jouney-duration flex align-center">
                <span className="jouney-duration-line"></span>
                <span className="duration">
                  <b>6</b> hrs <b>20</b> mins
                </span>
                <span className="jouney-duration-line"></span>
              </div>
              <div className="view-routes">View route</div>
            </div>
            <div className="flex flex-column">
              <div className="arrival-time">6:15 AM, Thu</div>
              <div className="station-name">Kanpur Central (CNB)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="trainSubsChild">
      <div className="flex-column flex m-r-15">
        <div id="train_options_01-05-2024_0" className="card ">
          <div className="flex align-center justify-space-between" style={{ marginBottom: '5px', fontWeight: 'bold' }}>
            <div className="flex align-center">
              <div className="rail-class">SL</div>
              <div className="tatkal-quota">TATKAL</div>
            </div>
            <div className="ticket-price justify-flex-end"><span>₹</span> 400</div>
          </div>
          <div className="flex align-center justify-space-between" style={{ marginBottom: '15px' }}>
            <div className="availibilty-info" style={{ color: 'rgb(38, 181, 169)' }}>Available 41</div>
          </div>
          <div className="railofy-texts-container"><span className="railofy-texts free-cancellation-text">Free Cancellation</span></div>
          <div className="update-info">Updated 1 hr ago</div>
        </div>
      </div>
      <div className="flex-column flex m-r-15">
        <div id="train_options_01-05-2024_1" className="card ">
          <div className="flex align-center justify-space-between" style={{ marginBottom: '5px', fontWeight: 'bold' }}>
            <div className="flex align-center">
              <div className="rail-class">3A</div>
              <div className="tatkal-quota">TATKAL</div>
            </div>
            <div className="ticket-price justify-flex-end"><span>₹</span> 1090</div>
          </div>
          <div className="flex align-center justify-space-between" style={{ marginBottom: '15px' }}>
            <div className="availibilty-info" style={{ color: 'rgb(38, 181, 169)' }}>Available 78</div>
          </div>
          <div className="railofy-texts-container"><span className="railofy-texts free-cancellation-text">Free Cancellation</span></div>
          <div className="update-info">Updated 2 hrs ago</div>
        </div>
      </div>
      <div className="flex-column flex m-r-15">
        <div id="train_options_01-05-2024_1" className="card ">
          <div className="flex align-center justify-space-between" style={{ marginBottom: '5px', fontWeight: 'bold' }}>
            <div className="flex align-center">
              <div className="rail-class">3A</div>
              <div className="tatkal-quota">TATKAL</div>
            </div>
            <div className="ticket-price justify-flex-end"><span>₹</span> 1090</div>
          </div>
          <div className="flex align-center justify-space-between" style={{ marginBottom: '15px' }}>
            <div className="availibilty-info" style={{ color: 'rgb(38, 181, 169)' }}>Available 78</div>
          </div>
          <div className="railofy-texts-container"><span className="railofy-texts free-cancellation-text">Free Cancellation</span></div>
          <div className="update-info">Updated 2 hrs ago</div>
        </div>
      </div>
      <div className="flex-column flex m-r-15">
        <div id="train_options_01-05-2024_1" className="card ">
          <div className="flex align-center justify-space-between" style={{ marginBottom: '5px', fontWeight: 'bold' }}>
            <div className="flex align-center">
              <div className="rail-class">3A</div>
              <div className="tatkal-quota">TATKAL</div>
            </div>
            <div className="ticket-price justify-flex-end"><span>₹</span> 1090</div>
          </div>
          <div className="flex align-center justify-space-between" style={{ marginBottom: '15px' }}>
            <div className="availibilty-info" style={{ color: 'rgb(38, 181, 169)' }}>Available 78</div>
          </div>
          <div className="railofy-texts-container"><span className="railofy-texts free-cancellation-text">Free Cancellation</span></div>
          <div className="update-info">Updated 2 hrs ago</div>
        </div>
      </div>
    </div>
      <div className="flex">
        <div className="false dropdown-options flex align-center">
          <span>Nearby dates</span>
          <span className="appendLeft10 arrowTab downArrowTab"></span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default trainDetails