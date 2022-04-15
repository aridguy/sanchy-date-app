import React from "react";
import empty_wishlist from "../../assets/images/Empty-Wishlist.svg";
import "./NoDates.css";


const NoDates = ({data}) => {
    return (
        <div className="no-dates">
            <div>
                <img src={empty_wishlist} alt="empty list" />
            </div>
            <h3>{data.title}</h3>
            <p>{data.subTitle}</p>
            {data.showButton? <div><button >Find Dates</button></div> : null}
        </div>
    )
}

export default NoDates;