import React from "react";
import "./SettingsTabMobile.css";

const SettingsTabMobile =({opt, currentTab}) => {
    return (
        <div className="settings-tab-mobile">
            <button className={`${opt === 0? 'active': 'regular'}`} onClick={()=> currentTab(0)}>Password</button>
            <button className={`${opt === 1? 'active': 'regular'}`} onClick={()=> currentTab(1)}>KYC</button>
            <button className={`${opt === 2? 'active': 'regular'}`} onClick={()=> currentTab(2)}>Voucher</button>
        </div>
    )
}

export default SettingsTabMobile;