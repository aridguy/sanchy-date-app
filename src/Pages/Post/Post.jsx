import React, { useState } from "react";
import HotpicksHolder from "../../components/HotpicksHolder/HotpicksHolder";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import Status from "../../components/Status/Status";

// hookup images around this section
import hookup1 from "../../assets/images/hookup1.svg";
import hookup2 from "../../assets/images/hookup2.svg";
import testPic from "../../assets/images/test.png";

// member section here
import filter from "../../assets/images/filter.svg"
import SidebarMobile from "../../components/Sidebar/SidebarMobile";

const Post = () =>{
    const hotPicks = [{ image: testPic, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: true }]
    const members = [{ image: testPic, id: 1, rate: false, verified: true }, { image: hookup1, id: 1, rate: false, verified: true }, { image: hookup2, id: 1, rate: false, verified: false }, { image: hookup1, id: 1, rate: false, verified: true }, { image: hookup2, id: 1, rate: false, verified: false }, { image: hookup1, id: 1, rate: false, verified: false }, { image: hookup2, id: 1, rate: false, verified: false }, { image: hookup1, id: 1, rate: false, verified: false }, { image: hookup2, id: 1, rate: false, verified: false }]
    const [showMoreHotpicks, setShowMoreHotpicks] = useState(false);
    
    return(
        <div>
            <LoggedInHeader />
            <div className="d-flex">
                <Sidebar activeLink={'post'} />
                <div className="w-75 m-4 left-content">
                    <Status />
                    {/* hot pics below here */}
                    <section className="hot-picks-title">
                        <div className="d-flex justify-content-center gap-2 align-items-baseline">
                            <h3 className="hpicks">Hot Picks</h3>
                            <p className="genderbackgd"><b>Gender</b>: Female</p>
                        </div>
                        <p className="viewall" onClick={() => setShowMoreHotpicks(!showMoreHotpicks)}> {!showMoreHotpicks? 'View all' : 'View less'} </p>
                    </section>
                    {/* hotpicks images */}
                    <div className="allhookpicksimages">
                        {hotPicks.map((user, userID) =>
                            <div key={userID}>{showMoreHotpicks || userID < 4 ? <HotpicksHolder userData={user} /> : null}</div>
                        )}
                    </div>

                    {/*member head section */}
                    <section className="hot-picks-title">
                        <div className="d-flex justify-content-center gap-2 align-items-baseline">
                            <h3 className="hpicks">Members</h3>
                            <p className="genderbackgd"><b>Gender</b>: Female</p>
                        </div>
                        <span className="searchusers"><input className="usersearchbox" placeholder="search members" type="text" /></span>
                        <img className="filter" src={filter} alt="filter.svg" />
                    </section>
                    <div className="allhookpicksimages">
                        {members.map((user, userID) =>
                            <div key={userID}><HotpicksHolder userData={user} /></div>
                        )}
                    </div>
                </div>
            </div>
            <SidebarMobile />
        </div>
    )
} 

export default Post;