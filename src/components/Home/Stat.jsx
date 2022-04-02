import React from "react";
import num_of_countries from "../../assets/images/num_of_countries.svg";
import stat_pie from "../../assets/images/stat_pie.svg";
import stat_star from "../../assets/images/stat_star.svg";
import './Stat.css';


const Stat =()=>{
    return (
        <div className="stat-container d-flex justify-content-center p-2 align-items-center">
            <div className="item-one p-4"><img src={num_of_countries} alt="num_of_countries" /> <span>50 countries</span></div>
            <div><img src={stat_pie} alt="stat pie" /></div>
            <div><img src={stat_star} alt="stat star" /></div>
        </div>
    )
}

export default Stat;