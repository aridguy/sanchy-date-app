import React, { useState } from "react";
import HotpicksHolder from "../../components/HotpicksHolder/HotpicksHolder";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import Status from "../../components/Status/Status";

// hookup images around this section
import hookup1 from "../../assets/images/hookup1.svg";
import hookup2 from "../../assets/images/hookup2.svg";
import testPic from "../../assets/images/test.png";

import media from "../../assets/images/addmedia.svg";
import price from "../../assets/images/setprice.svg";
// upload complete image 
import upload from '../../assets/images/uploaded.png';
import cancle from '../../assets/images/cancle.svg'

// css file here
import './AddPost.css';

// member section here
import filter from "../../assets/images/filter.svg"
import SidebarMobile from "../../components/Sidebar/SidebarMobile";

const AddPost = () => {
    const hotPicks = [{ image: testPic, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }]
    const members = [{ image: testPic, id: 1, rate: false, verified: true }, { image: hookup1, id: 1, rate: false, verified: true }, { image: hookup2, id: 1, rate: false, verified: false }, { image: hookup1, id: 1, rate: false, verified: true }, { image: hookup2, id: 1, rate: false, verified: false }, { image: hookup1, id: 1, rate: false, verified: false }, { image: hookup2, id: 1, rate: false, verified: false }, { image: hookup1, id: 1, rate: false, verified: false }, { image: hookup2, id: 1, rate: false, verified: false }]
    const [showMoreHotpicks, setShowMoreHotpicks] = useState(false);

    return (
        <div>
            <LoggedInHeader />
            <div className="d-flex">
                <Sidebar activeLink={'post'} />
                <div className="container">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-3">
                                <h3><b>Posts</b></h3>
                            </div>
                            <div className="col-sm-9"></div>
                        </div>

                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-9 d-flex">
                                <div><p>Cancel</p></div>
                                <div className="d-p">
                                    <p className="draft">Drafts</p>
                                    <button className="posts">Post</button>
                                </div>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-9">
                                <textarea className="composenewpost" placeholder="compose new post" name="text" id="" cols="30" rows="10"></textarea>
                                <div className="medias">
                                    <img className="media" src={media} alt="add media" />
                                    <img className="price" src={price} alt="add media" />
                                </div>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </div>
                    <div className="container upload-complete">
                        <div className="row">
                            <div className="col-sm-4">
                                <img className="uploadImgComplete" src={upload} alt="" />
                                <span className="styled-span">upload complete <img className="cancle" src={cancle} alt="" /></span>
                            </div>
                            <div className="col-sm-8"></div>
                        </div>
                        </div>

                </div>
                
            </div>
            <SidebarMobile />
        </div>
    )
}

export default AddPost;