import React from "react";
import "./Status.css";
// all status images below here
import pretty from "../../assets/images/pretty.png";
import valery from "../../assets/images/valerie.png";
import roman from "../../assets/images/roman.png";
import nice from "../../assets/images/nice.png";
import escstarcy from "../../assets/images/escstarcy.png";
import celine from "../../assets/images/celine.png";
import story from "../../assets/images/story.png";
import chev1 from "../../assets/images/chevleft.svg";
import chev2 from "../../assets/images/chevright.svg";
import hiw from "../../assets/images/hiw_main.svg";

const Status = () => {
    let statuses = [pretty, valery, roman, hiw, nice, escstarcy, celine, story]
    return (
        <div className="story-section">
            <img className="chevleft" alt="left" src={chev1} />
            {statuses.map((image, id) => <div key={id}><img className="pretty" alt="friend" src={image} /></div>)}
            <img className="chevright" alt="friend" src={chev2} />
        </div>
    )
}

export default Status;