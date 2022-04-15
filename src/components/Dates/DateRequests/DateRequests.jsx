import React from "react";
import "./DateRequests.css";
import NoDates from "../NoDates";

const DateRequests = ({hideContent}) => {
    const clearDate=()=>{
        hideContent();
    }
    const availableRequests = [];
    return (
        <div>
            {
                availableRequests.length === 0 ?
                    <NoDates data={{title: 'You have no Date Request', subTitle: 'Meet members now', showButton: true}} clearDate={()=>clearDate()} />
                    :
                    <div className="available-dates-container">
                        Available Requests
                    </div>
            }
        </div>
    )
}

export default DateRequests;