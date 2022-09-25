import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from './Components/Home/Home';

import './App.scss';

function App() {

  return (
    <GoogleOAuthProvider clientId="322468080997-j5gft9mrr0dqda6633fjthh6hvrn6ocb.apps.googleusercontent.com">
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
