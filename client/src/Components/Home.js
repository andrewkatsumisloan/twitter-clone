import React from 'react'

import SideBarLeft from './SideBarLeft';
import SideBarRight from './SideBarRight';
import Feed from './Feed'

import './Home.scss';

const Home = () => {
  return (
    <div className='home-class'>
        <SideBarLeft />
        <Feed />
        <SideBarRight />
    </div>
  )
}

export default Home