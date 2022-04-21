import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import "./Settings.css";
import SettingsTab from "../../components/Settings/SettingsTab/SettingsTab";
import SettingsPassword from "../../components/Settings/SettingsPassword/SettingsPassword";
import SettingsKyc from "../../components/Settings/SettingsKyc/SettingsKyc";
import SettingsVoucher from "../../components/Settings/SettingsVoucher/SettingsVoucher";
import SidebarMobile from "../../components/Sidebar/SidebarMobile";
import SettingsTabMobile from "../../components/Settings/SettingsTab/SettingsTabMobile";

const Settings = () => {
    const [opt, setOpt] = useState(0);
    const tabList = [{ to: '/settings', value: 'Password' }, { to: 'KYC', value: 'KYC' }, { to: 'voucher', value: 'Voucher' }]
    return (
        <div>
            <LoggedInHeader />
            <div className="d-flex mr-2 ml-2 ">
                <Sidebar activeLink={''} />
                <div className='edit-profile-center-content-wrapper w-75'>
                    <div className='edit-profile-center-content'>
                        <SettingsTabMobile />
                        <SettingsTab title={'Settings'} opt={opt} tabList={tabList} currentTab={(a) => setOpt(a)} />

                        {opt === 0 ? 
                        <SettingsPassword /> :
                        opt === 1 ? 
                        <SettingsKyc /> : 
                        <SettingsVoucher />}
                    </div>
                </div>
            </div>
            <SidebarMobile />
        </div>
        // </div>
    );
}
export default Settings;