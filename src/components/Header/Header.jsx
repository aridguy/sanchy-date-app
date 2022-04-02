import React from "react";
import { useNavigate } from "react-router-dom";
import quick_date from "../../assets/images/quick_date.png";
import "./Header.css";

const Header = ()=> {
    const navigate = useNavigate()
    const linkToLogin =()=> navigate('/login');

    return (
        <div className="d-flex justify-content-between  align-items-baseline bg-white header-container">
            <div><img src={quick_date} alt="quick-date" /></div>
            <div className="d-flex align-items-baseline">
                <p className="m-2">Already have an Account?</p>
                <button className="border border-danger rounded-pill bg-white pl-2 pr-2" onClick={linkToLogin}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Header;