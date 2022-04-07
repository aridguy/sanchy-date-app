import React from "react";
import "./Community.css";


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
import Status from "../../components/Status/Status";

const Community = () => {
    return (
        <div>
            <LoggedInHeader />
            <div className="d-flex mr-2 ml-2 ">
                <Sidebar activeLink={'community'} />
                <div className="w-75 m-4">
                    <Status />
                    {/* hot pics below here */}
                    <section className="hot-picks-title">
                        <div>
                            <span className="hpicks">Hot Picks</span>
                            <span className="genderbackgd"><small className="gendertype">Gender:Female</small></span>
                        </div>
                        <p className="">View all</p>
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