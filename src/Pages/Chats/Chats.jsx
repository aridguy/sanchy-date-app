import React, { useState } from "react";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Chats.css";
import search from "../../assets/images/chat-search.svg";
import FriendsList from "../../components/Chat/FriendsList/FriendsList";
import ChatArea from "../../components/Chat/ChatArea/ChatArea";

const Chats = () => {
    const [selectedFriendMessages, setSelectedFriendMessages] = useState();
    const emittedFriend = (friend)=>{
        setSelectedFriendMessages(friend);
    }
    return (
        <div>
            <LoggedInHeader />
            <div className="d-flex mr-2 ml-2 ">
                <Sidebar activeLink={'chats'} />
                <div className="w-75">
                    <div className="chat-header">
                        <div className="search-holder">
                            <img src={search} alt="search" />
                            <input className="friend-search" placeholder="Search Chats" />
                        </div>
                        <div></div>
                        <button className="request-token">Request Token</button>
                    </div>
                    <div className="chat-wrapper">
                        <FriendsList emitSelectedFriend={emittedFriend} />   
                        <ChatArea selectedFriendMessages={selectedFriendMessages} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chats;