import React from "react";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import './BuyTokens.css';

const BuyTokens = () => {
    return (
        <div>
            <LoggedInHeader />
            <div className="d-flex mr-2 ml-2 ">
                <Sidebar activeLink={'buy-tokens'} />
                <div className="container parent">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="first-description">
                                <ul>
                                    <div className="wallet"><span className="text1">Wallet</span></div>
                                    <div className="m-wallet"><span className="text2">My Wallet</span></div>
                                    <div className="subscribe"><span className="text3">Subscription</span></div>
                                    <div className="payment"><span className="text4+">Payment</span></div>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 sd-backg">
                            <div className="second-description">
                                <div className="">
                                    <div className="text-wrapper1">
                                        <div>
                                        <div><b>Basic</b></div>
                                        <div className="txt1"> <i className="fa fa-check"></i> Hot Pics Ranking</div>
                                        <div className="txt1"> <i className="fa fa-check"></i> Explore Community</div>
                                        <div className="txt1"> <i className="fa fa-check"></i> Unlimited Media Upload</div>
                                        <div className="txt1"> <i className="fa fa-check"></i> Limited Media Upload</div>
                                        <div className="txt1"> <i className="fa fa-check"></i> 28 Token</div>
                                        <div className="txt1">500 Tokens</div>
                                        <button className="chooseFormBtn">Choose</button>
                                        </div>
                                        {/* <li>Hot pics ranking</li> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sapiente aliquam expedita alias tenetur, illum nam cupiditate adipisci. Ad eaque reiciendis expedita natus minima dignissimos! Quibusdam numquam reprehenderit quo accusantium.
                        </div>
                        <div className="col-md-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sapiente aliquam expedita alias tenetur, illum nam cupiditate adipisci. Ad eaque reiciendis expedita natus minima dignissimos! Quibusdam numquam reprehenderit quo accusantium.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyTokens;