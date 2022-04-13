import React from 'react';
import  './UserPostsGrid.css';
import image_placeholder from '../../assets/images/image_placeholder.png'
import UserSinglePost from '../UserSinglePost/UserSinglePost';



const UserPostsGrid = () => {
  return (
    <div className='user-posts-grid'>
      <UserSinglePost />
      <UserSinglePost />
      <UserSinglePost />
    </div>
  )
}

export default UserPostsGrid