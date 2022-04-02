import React from "react";
import "./Footer.css";
import footer_quick_date from "../../assets/images/footer_quick_date.svg";
import { useNavigate } from "react-router-dom";

const Footer =()=>{
    const navigate = useNavigate();
    const linkToSignUp =()=> navigate('/signup');

    return (
        <div className="footer-container">
            <div className="d-flex justify-content-between gap-4">
                <div>
                    <div><img src={footer_quick_date} alt="quick dates" /></div>
                    <button onClick={linkToSignUp} className="footer-signup-btn mt-4 p-4 border-0 rounded-pill">Create an Account</button>
                </div>
                <div className="d-flex gap-4">
                    <div>
                        <p>Home</p>
                        <p>Contact</p>
                        <p>Support</p>
                    </div>
                    <div>
                        <p>FAQ</p>
                        <p>Terms and Conditions</p>
                        <p>Blogs</p>
                    </div>
                    <div>
                        <p>Privacy</p>
                        <p>Facebook</p>
                        <p>Instagram</p>
                    </div>
                    <div>
                        <p>Twitter</p>
                        <p>Snapchat</p>
                        <p>TikTok</p>
                    </div>
                </div>
            </div>
            <p className="text-center mt-4 mb-4">&copy; 2022 all Right Reserved</p>
        </div>
    )
}

export default Footer;