import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Components/Home/Home';

import './App.scss';

function App() {
  const PostContext = React.createContext()

  return (
    <div className="App">
      <Router> 
        <PostContext.Provider> 
        <Routes> 
          <Route path="/" element={<Home />} />
        </Routes>
        </PostContext.Provider>
      </Router>
    </div>
  );
}

export default App;
