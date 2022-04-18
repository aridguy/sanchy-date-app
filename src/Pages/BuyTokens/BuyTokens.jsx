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
                                            <div className="htxt1">Basic</div>
                                            <div className="txt1"> <i className="fa fa-check"></i> Hot Pics Ranking</div>
                                            <div className="txt1"> <i className="fa fa-check"></i> Explore Community</div>
                                            <div className="txt1"> <i className="fa fa-check"></i> Unlimited Media Upload</div>
                                            <div className="txt1"> <i className="fa fa-check"></i> Limited Media Upload</div>
                                            <div className="txt1"> <i className="fa fa-check"></i> 28 Token</div>
                                            <div className="txt1 token-amount"><b>500 Tokens</b></div>
                                            <button className="chooseFormBtn">Choose</button>
                                        </div>
                                        {/* <li>Hot pics ranking</li> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="col-md-3 sd-backg2">
                            <div className="second-description">
                                <div className="">
                                    <div className="text-wrapper2">
                                        <div>
                                            <div className="htxt1">Basic </div><span className="badge">Save $40</span>
                                            <div className="txt1"> <i className="fa fa-check"></i> Hot Pics Ranking</div>
                                            <div className="txt1"> <i className="fa fa-check"></i> Explore Community</div>
                                            <div className="txt1"> <i className="fa fa-check"></i> Unlimited Media Upload</div>
                                            <div className="txt1"> <i className="fa fa-check"></i> Limited Media Upload</div>
                                            <div className="txt1"> <i className="fa fa-check"></i> 28 Token</div>
                                            <div className="txt1 token-amount">1000 Tokens</div>
                                            <button className="chooseFormBtn2">Choose</button>
                                        </div>
                                        {/* <li>Hot pics ranking</li> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 sd-backg3">
                            <div className="second-description">
                                <div className="">
                                    <div className="text-wrapper3">
                                        <div>
                                            <div className="htxt1">Premium </div><span className="badge">Save $40</span>
                                            <div className="txt1 t3s"> <i className="fa fa-check"></i> Hot Pics Ranking</div>
                                            <div className="txt1 t3s"> <i className="fa fa-check"></i> Recommendations</div>
                                            <div className="txt1 t3s"> <i className="fa fa-check"></i> Search Mode</div>
                                            <div className="txt1 t3s"> <i className="fa fa-check"></i> Limited Media Upload</div>
                                            <div className="txt1 t3s"> <i className="fa fa-check"></i> Unlimited Data Applications</div>
                                            <div className="txt1 t3s"> <i className="fa fa-check"></i> 28 Token</div>
                                            <div className="txt1 token-amount 3">1500 Tokens</div>
                                            <button className="chooseFormBtn3">Choose</button>
                                        </div>
                                        {/* <li>Hot pics ranking</li> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* parent row 1 up here */}
                </div>
                {/* parent closes here */}
            </div>
            <div className="container">
                    <div className="row">
                        <div className="col-md-2">hh</div>
                        <div className="col-md-2">jjj</div>
                        <div className="col-md-4">nn</div>
                        <div className="col-md-4">nn</div>
                        

                    </div>
                </div>
        </div>
    )
}

export default BuyTokens;