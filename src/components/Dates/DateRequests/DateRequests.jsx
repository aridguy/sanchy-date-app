import React from "react";
import "./DateRequests.css";

import male from "../../../assets/images/male.svg";
import female from "../../../assets/images/female.svg";
import NoDates from "../NoDates";
import hookup2 from "../../../assets/images/date-request-sample.svg";

const DateRequests = ({ hideContent }) => {
    const clearDate = () => {
        hideContent();
    }
    const availableRequests = [{ time: '9PM(GMT+1)', image: hookup2, city: 'Berlin, DE' }, { time: '9PM(GMT+1)', image: hookup2, city: 'Berlin, DE' }, { time: '9PM(GMT+1)', image: hookup2, city: 'Berlin, DE' },{ time: '9PM(GMT+1)', image: hookup2, city: 'Berlin, DE' }];
    // [];
    return (
        <div>
            {
                availableRequests.length === 0 ?
                    <NoDates data={{ title: 'You have no Date Request', subTitle: 'Meet members now', showButton: true }} clearDate={() => clearDate()} />
                    :
                    <div className="available-dates-request-container">
                        {
                            availableRequests.map((request, key) =>
                                <div key={key} className="item">
                                    <p>Today at 7:30 PM (GMT+2)</p>
                                    <p>Time remaining 1hr 30 mins</p>
                                    <p>City: {request.city}</p>
                                    <p><button className="drinks">Drinks</button></p>
                                    <p>I am looking for: <span>I am looking for</span> <img src={male} alt="male" /> <img src={female} alt="female" /></p>
                                    <div className="request-card">
                                        <div><img src={request.image} alt="" /></div>
                                        <div><button className="open">Open Chat</button></div>
                                        <div><button className="decline">Decline</button></div>
                                    </div>
                                </div>
                            )}
                    </div>
            }
        </div>
    )
}

export default DateRequests;