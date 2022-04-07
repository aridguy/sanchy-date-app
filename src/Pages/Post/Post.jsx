import React from "react";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import Sidebar from "../../components/Sidebar/Sidebar";

const Post = () =>{
    return(
        <div>
            <LoggedInHeader />
            <div className="d-flex mr-2 ml-2 ">
                <Sidebar activeLink={'post'} />
            </div>
        </div>
    )
} 

export default Post;