import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SideBarLeft from './Components/SideBarLeft';
import SideBarRight from './Components/SideBarRight';
import Feed from './Components/Feed'
import Home from './Components/Home';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router> 
        <Routes> 
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
