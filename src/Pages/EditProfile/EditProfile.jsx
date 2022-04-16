import React from 'react';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarMobile from '../../components/Sidebar/SidebarMobile';
import './EditProfile.css';
import './EditProfileMobile.css';


const EditProfile = () => {
  return (
    <div>
        <LoggedInHeader />
        <div className='d-flex'>
            
            <Sidebar />
            
            <div className='edit-profile-center-content-wrapper'>
                <div className='edit-profile-heading'>Account</div>

                <div className='edit-profile-center-content'>
                  
                  <div className=''>
                    <div className='edit-profile-active' >Profile Information</div>
                    <div>Profile Images</div>
                    <div>Verify Profile</div>
                  </div>

                  <div>
                    helllo word
                  </div>

                </div>
            </div>


            <SidebarMobile />
        </div>
    </div>
    
  )
}

export default EditProfile