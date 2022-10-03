import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';

import './App.scss';
import SideBarLeft from './Components/SideBar/SideBarLeft/SideBarLeft'
import SideBarRight from './Components/SideBar/SideBarRight/SideBarRight';

function App() {
  return (
    <GoogleOAuthProvider clientId="322468080997-j5gft9mrr0dqda6633fjthh6hvrn6ocb.apps.googleusercontent.com">
      <div className="App">
        <Router>
          <SideBarLeft />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <SideBarRight />
        </Router>
      </div>
    </GoogleOAuthProvider>

  );
}

export default App;
