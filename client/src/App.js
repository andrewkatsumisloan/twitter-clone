import SideBarLeft from './Components/SideBarLeft';
import SideBarRight from './Components/SideBarRight';
import Feed from './Components/Feed'

import './App.scss';

function App() {
  return (
    <div className="App">
      <SideBarLeft />
      <Feed />
      <SideBarRight />
    </div>
  );
}

export default App;
