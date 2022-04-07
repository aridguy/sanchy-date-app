import React from "react";
import "./Community.css";

// all story images below here
import pretty from "../../assets/images/pretty.png";
import valery from "../../assets/images/valerie.png";
import roman from "../../assets/images/roman.png";
import nice from "../../assets/images/nice.png";
import escstarcy from "../../assets/images/escstarcy.png";
import celine from "../../assets/images/celine.png";
import story from "../../assets/images/story.png";
import chev1 from "../../assets/images/chevleft.svg";
import chev2 from "../../assets/images/chevright.svg";
// hookup images around this section
import hookup1 from "../../assets/images/hookup1.svg";
import hookup2 from "../../assets/images/hookup2.svg";
// hook images
import verified from "../../assets/images/verified.svg";
import rate from "../../assets/images/rating.svg";
import cam from "../../assets/images/camera.svg";
import vidcam from "../../assets/images/vidcam.svg";

// member section here
import filter from "../../assets/images/filter.svg"
import Sidebar from "../../components/Sidebar/Sidebar";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";

const Community = () => {
    return (

        <div>
            <LoggedInHeader />

            {/* side nav */}
            <div className="d-flex mr-2 ml-2 ">
                <Sidebar activeLink={'community'} />
                <div className="w-75 m-4">
                    <div className="story-section">
                        <img className="chevleft" alt="left" src={chev1} />
                        <img className="pretty" alt="friend" src={pretty} />
                        <img className="valery" alt="friend" src={valery} />
                        <img className="celine" alt="friend" src={celine} />
                        <img className="nice" alt="friend" src={nice} />
                        <img className="roman" alt="friend" src={roman} />
                        <img className="escstacy" alt="friend" src={escstarcy} />
                        <img className="story" alt="friend" src={story} />
                        <img className="chevright" alt="friend" src={chev2} />
                    </div>
                    {/* hot pics below here */}
                    <section className="hp-viewall">
                        <span className="hpicks">Hot Pics</span>
                        <span className="genderbackgd"><small className="gendertype">Gender:Female</small></span>
                        <span className="viewall">View all</span>
                    </section>
                    {/* hotpicks images */}
                    <div className="allhookpicksimages d-flex gap-4 ">
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span className="hpname">Elena</span> <small><img src={verified} alt="verified.svg" /></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup2} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span className="hpname">Elena</span> <small><img src={verified} alt="verified.svg" /></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages hotpicksimages1">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small><img src={verified} alt="verified.svg" /></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages hotpicksimages2">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span className="hfname">Elena</span> <small><img className="hfverify" src={verified} alt="verified.svg" /></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/*member head section */}
                    <section className="hp-viewall">
                        <span className="hpicks">Members</span>
                        <span className="genderbackgd"><small className="gendertype">Gender:Female</small></span>
                        <span className="searchusers"><input className="usersearchbox" placeholder="search members" type="text" /></span>
                        <img className="filter" src={filter} alt="filter.svg" />
                    </section>
                    <div className="allhookpicksimages d-flex gap-4 ">
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup2} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="allhookpicksimages d-flex gap-4 ">
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup2} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="allhookpicksimages d-flex gap-4 ">
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup2} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="allhookpicksimages d-flex gap-4 ">
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup2} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="allhookpicksimages d-flex gap-4 ">
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup2} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="hotpicksimages">
                            <div className="h-imgs">
                                <img className="hook1" src={hookup1} alt="" />
                                <img className="ratings" src={rate} alt="rating.svg" />
                                <div className="hooksfoot">
                                    <span>Elena</span> <small></small>
                                    <span className="cam-vidcam">
                                        <img className="cam" src={cam} alt="camera.svg" />
                                        <img className="vidcam" src={vidcam} alt="vidcam.svg" />
                                    </span>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Community;