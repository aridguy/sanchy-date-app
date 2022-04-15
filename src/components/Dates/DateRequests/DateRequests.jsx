import React from "react";
import "./DateRequests.css";
import NoDates from "../NoDates";

const DateRequests = () => {
    const availableRequests = [];
    return (
        <div>
            {
                availableRequests.length === 0 ?
                    <NoDates data={{title: 'You have no Date Request', subTitle: 'Meet members now', showButton: true}} />
                    :
                    <div className="available-dates-container">
                        Available Requests
                    </div>
            }
        </div>
    )
}

export default DateRequests;