import React, { useState } from "react";
import "./Dates.css";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import DateApplications from "../../components/Dates/DateApplications/DateApplications";
import DateRequests from "../../components/Dates/DateRequests/DateRequests";
import Sidebar from "../../components/Sidebar/Sidebar";
import filter from "../../assets/images/filter.svg"
import location from "../../assets/images/carbon_location.svg";
import SidebarMobile from "../../components/Sidebar/SidebarMobile";

const Dates = () => {
    const [currentDateTab, setCurrentDateTab] = useState('apply-dates');

    return (
        <div>
            <LoggedInHeader />
            <div className="d-flex mr-2 ml-2 ">
                <Sidebar activeLink={'dates'} />
                <div className='date-content-wrapper w-75 p-2'>
                    <div className="nav-buttons">
                        <button className={`apply-date ${currentDateTab === 'apply-dates' ? 'current' : ''}`} onClick={() => setCurrentDateTab('apply-dates')} >Apply for Dates</button>
                        <button className={`apply-date ${currentDateTab !== 'apply-dates' ? 'current' : ''}`} onClick={() => setCurrentDateTab('')}>My Date Request</button>
                    </div>
                    <div className="nav-filter">
                        <div className="input-container">
                            <img src={location} alt="location" />
                            <input placeholder="City, Country" />
                        </div>
                        <div><img src={filter} alt="filter" /></div>
                    </div>
                    {
                        currentDateTab === "apply-dates" ?
                            <DateApplications />
                            :
                            <DateRequests />
                    }
                </div>
            </div>
            <SidebarMobile />
        </div>
    )
}

export default Dates;