import React, { useState } from "react";
import dp from "../../../assets/images/chat-dp.png";
import "./FriendsList.css";

const FriendsList = ({emitSelectedFriend}) => {
    const [selectedFriendKey, setSelectedFriendKey] = useState('');

    const friendsList =
        [
            { firstName: 'Elena', lastMessage: 'When should we meet', time: '12:39', profileImage: dp, online: true },
            { firstName: 'Elena', lastMessage: 'When should we meet', time: '12:39', profileImage: dp, online: true },
            { firstName: 'Elena', lastMessage: 'When should we meet', time: '12:39', profileImage: dp, online: true },
            { firstName: 'Elena', lastMessage: 'When should we meet', time: '12:39', profileImage: dp, online: true },
            { firstName: 'Elena', lastMessage: 'When should we meet', time: '12:39', profileImage: dp, online: true },
            { firstName: 'Elena', lastMessage: 'When should we meet', time: '12:39', profileImage: dp, online: true },
            { firstName: 'Elena', lastMessage: 'When should we meet', time: '12:39', profileImage: dp, online: true }
        ];
    return (
        <div className="friend-list">
            {friendsList.map((friend, key) =>
                <div key={key} onClick={() => setSelectedFriendKey(key)&emitSelectedFriend(friend)} className={`item-wrapper ${selectedFriendKey === key ? 'selected-friend' : ''}`}>
                    <time className="time">{friend.time}</time>
                    <div className="item">
                        <img src={friend.profileImage} alt="dp" />
                        <div>
                            <p><b>{friend.firstName}</b></p>
                            <p className="message">{friend.lastMessage}</p>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default FriendsList;