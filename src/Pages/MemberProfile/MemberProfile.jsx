import React from "react";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import Sidebar from "../../components/Sidebar/Sidebar";

const MemberProfile = () => {
    return (
        <div>
            <LoggedInHeader />
            <div className="d-flex">
                <Sidebar activeLink={''} />
                <div className="w-75 m-4 left-content">
                    Member Profile
                </div>
            </div>
        </div>
    )
}

export default MemberProfile;