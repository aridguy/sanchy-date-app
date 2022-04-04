import React from "react";
import num_of_countries from "../../assets/images/num_of_countries.svg";
import stat_pie from "../../assets/images/stat_pie.svg";
import stat_star from "../../assets/images/stat_star.svg";
import stat_sm from "../../assets/images/stat-sm.svg";

import './Stat.css';

const Stat = () => {
    return (
        <div>
            <div>
                <div className="w-100"><img className="w-100" src={stat_sm} alt="stat star" /></div>
            </div>
        </div>
    )
}

export default Stat;