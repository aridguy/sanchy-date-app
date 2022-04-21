import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import "./Voucher.css";

const Voucher = () =>{
    const [currentlySelectedImprint, setCurrentlySelectedImprint] = useState('legal');
    const [pageTitle, setPageTitle] = useState('Legal');
    return(
        <div>
            <LoggedInHeader />
            <div className="d-flex mr-2 ml-2 ">
                <Sidebar activeLink={''} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 main-parent">
                            <div className={`txt-parent-2a ${currentlySelectedImprint==='legal' ? 'txt-parent-2b' : ''}`} onClick={() => setCurrentlySelectedImprint('legal')&setPageTitle('Settings')}><p className="txt1">Settings</p></div> <hr className="smalls" />
                            <div className={`txt-parent-2a ${currentlySelectedImprint==='terms' ? 'txt-parent-2b' : ''}`} onClick={()=> setCurrentlySelectedImprint('terms')&setPageTitle('Password')}><p className="txt1">Password</p></div>
                            <div className={`txt-parent-2a ${currentlySelectedImprint==='privacy' ? 'txt-parent-2b' : ''}`} onClick={()=> setCurrentlySelectedImprint('privacy')&setPageTitle('KYC')}><p className="txt1">KYC</p></div>
                            <div className={`txt-parent-2a ${currentlySelectedImprint==='imprint' ? 'txt-parent-2b' : ''}`} onClick={()=> setCurrentlySelectedImprint('imprint')&setPageTitle('Voucher')}><p className="txt1">Voucher</p></div>
                          
                        </div>
                        <div className="col-md-8">
                            <div><h4 className="httext-imprint">{pageTitle}</h4></div>
                            <div className="texts-contents">
                                <p>
                                 ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime eaque, saepe nisi ex odit delectus libero ipsa quos est ab aperiam adipisci rem tempore? Debitis ducimus dolor ex laboriosam!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam laborum consequuntur, repellat dolorem reprehenderit neque cumque sit delectus placeat vitae nesciunt laudantium ad voluptatum fugit? Quos quidem eos provident inventore.
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime eaque, saepe nisi ex odit delectus libero ipsa quos est ab aperiam adipisci rem tempore? Debitis ducimus dolor ex laboriosam!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam laborum consequuntur, repellat dolorem reprehenderit neque cumque sit delectus placeat vitae nesciunt laudantium ad voluptatum fugit? Quos quidem eos provident inventore.
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime eaque, saepe nisi ex odit delectus libero ipsa quos est ab aperiam adipisci rem tempore? Debitis ducimus dolor ex laboriosam!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam laborum consequuntur, repellat dolorem reprehenderit neque cumque sit delectus placeat vitae nesciunt laudantium ad voluptatum fugit? Quos quidem eos provident inventore.
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime eaque, saepe nisi ex odit delectus libero ipsa quos est ab aperiam adipisci rem tempore? Debitis ducimus dolor ex laboriosam!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam laborum consequuntur, repellat dolorem reprehenderit neque cumque sit delectus placeat vitae nesciunt laudantium ad voluptatum fugit? Quos quidem eos provident inventore.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>

            </div>
        </div>
    );
    }
export default Voucher;