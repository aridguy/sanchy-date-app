import React from "react";
import { useNavigate } from "react-router-dom";
import quick_date from "../../assets/images/quick_date.png";
import "./Header.css";

const Header = ()=> {
    const navigate = useNavigate()
    const linkToLogin =()=> navigate('/login');
    const linkToSignUp =()=> navigate('/signup');

    return (
        <div className="d-flex justify-content-between  align-items-baseline bg-white header-container">
            <div><img src={quick_date} alt="quick-date" /></div>
            <div className="d-flex align-items-baseline">
                <button className="border-0 bg-transparent m-2" onClick={linkToSignUp}>Already have an Account?</button>
                <button className="border border-danger rounded-pill bg-white pl-4 pr-4" onClick={linkToLogin}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Header;