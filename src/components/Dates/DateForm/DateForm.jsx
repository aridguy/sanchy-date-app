import React from "react";
import "./DateForm.css";
import chev1 from "../../../assets/images/chevleft.svg";

const DateForm =()=>{
    return(
        <div className="container date-form-wrapper">
            <div><img src={chev1} alt="back" /></div>
            <div className="title">
                Setup Request
            </div>
        </div>
    )
}

export default DateForm;