import React from 'react';
import  './UserPostsGrid.css';
import image_placeholder from '../../assets/images/image_placeholder.png'


const UserPostsGrid = () => {
  return (
    <div className='user-posts-grid'>
        <img src={image_placeholder} alt="" />
        <img src={image_placeholder} alt="" />
        <img src={image_placeholder} alt="" />
        <img src={image_placeholder} alt="" />
        <img src={image_placeholder} alt="" />
        <img src={image_placeholder} alt="" />
    </div>
  )
}

export default UserPostsGrid