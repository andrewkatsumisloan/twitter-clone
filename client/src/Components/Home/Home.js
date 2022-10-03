import React from 'react'

import SideBarLeft from '../SideBar/SideBarLeft/SideBarLeft'
import SideBarRight from '../SideBar/SideBarRight/SideBarRight';
import Feed from '../Feed/Feed'

import './Home.scss';

const Home = () => {
  return (
    <div className='home-class'>
      {/* <SideBarLeft /> */}
      <Feed />
      {/* <SideBarRight /> */}
    </div>
  )
}

export default Home