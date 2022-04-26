import React from 'react'
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader'
import Sidebar from '../../components/Sidebar/Sidebar'

const Account = () => {
  return (
    <div>
        <LoggedInHeader />
        <div className='d-flex'>
            <Sidebar />
            <div className=''>

            </div>
        </div>
    </div>
  )
}

export default Account