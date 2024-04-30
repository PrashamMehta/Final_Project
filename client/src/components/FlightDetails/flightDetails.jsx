import React from 'react';
import './flightDetails.css';

function flightDetails() {
  return (
    <div className="listingCard appendBottom5">
      <div className="makeFlex hrtlCenter spaceBetween">
        <div className="makeFlex"></div>
      </div>
      <div className="makeFlex spaceBetween" >
        <div className="makeFlex">
          <div className="makeFlex align-items-center gap-x-10 airline-info-wrapper" style={{ marginTop: '-7px' }}>
            <span className="singleairline" style={{ paddingTop: '1rem', marginRight: '.7rem'}}>
              <span className="arln-logo logo1" style={{ backgroundImage: 'url("https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=19")' }}></span>
            </span>
            <div style={{ marginTop: '.5rem'}}>
              <p className="boldFont blackText airlineName" style={{ marginTop: '.5rem'}}>IndiGo</p>
              <p className="fliCode">6E 2302</p>
            </div>
          </div>
          <div className="fontSize12 darkText clusterTimingOuter"></div>
          <div className="timingOptionOuter">
            <label className="not-radio" htmlFor="jrnyKey_0_undefined" style={{ cursor: 'default' }}>
              <div className="timingOption">
                <div className="makeFlex">
                  <div className="makeFlex fontSize12 flexOne gap-x-10">
                    <div className="flexOne timeInfoLeft">
                      <p className="appendBottom2 flightTimeInfo"><span>06:00</span></p>
                      <p className="blackText"><font color="#000000"><span style={{ fontSize: '13px'}}>New Delhi</span></font></p>
                    </div>
                    <div className="stop-info flexOne">
                      <p>01<font color="#757575"> h </font>15<font color="#757575"> m </font></p>
                      <div>
                        <div className="relative fliStopsSep">
                          <p className="fliStopsSepLine" style={{ borderTop: '3px solid rgb(81, 226, 194)' }}></p>
                        </div>
                        <p className="flightsLayoverInfo">Non stop</p>
                      </div>
                    </div>
                    <div className="flexOne timeInfoRight">
                      <p className="appendBottom2 flightTimeInfo"><span>07:15</span></p>
                      <p className="blackText"><font color="#000000"><span style={{ fontSize: '13px', marginRight: '5px'}}>Bhopal</span></font></p>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="priceSection priceLockPersuasionExists">
          <div className="makeFlex top gap-x-10">
            <div className="textRight flexOne" style={{ marginTop: '-5px' }}>
              <div className="blackText fontSize18 blackFont white-space-no-wrap clusterViewPrice" style={{ marginLeft: '3rem', marginRight: '1.5rem'}}><span style={{ fontWeight: '900', fontSize: '20px'}}>₹ 3,119</span><p className="fontSize12 darkText lightFont"><span style={{ fontSize: '13px', marginRight: '5px'}}>per adult</span></p></div>
            </div>
            <button id="bookbutton-RKEY:a85d2079-64dd-4c25-91cc-34b207e150f2:1_0" className="ViewFareBtn text-uppercase clusterBtn">
              <span>VIEW PRICES</span>
            </button>
          </div>
        </div>
      </div>
      <div className="lpTriggerInfo makeFlex right">
        <span className="lockPriceTrigger">
          <span className="bgProperties icon12 appendRight5" style={{ backgroundImage: 'url("https://imgak.mmtcdn.com/flights/assets/media/dt/listing/plc.png")' }}></span>
          <span className="fontSize12 boldFont blueText">Lock this price starting from ₹ 89</span>
          <span className="bgProperties arrowRightStyle" style={{ backgroundImage: 'url("https://imgak.mmtcdn.com/flights/assets/media/dt/listing/hb.png")' }}></span>
        </span>
      </div>
      <div className="makeFlex spaceBtwCenter fontSize12 card-footer-v2">
        <div></div>
        <span className="linkText ctaLink viewFltDtlsCta">View Flight Details</span>
      </div>
    </div>
  );
}

export default flightDetails;
