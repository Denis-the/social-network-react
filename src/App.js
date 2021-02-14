
import './App.css';

import Header from './components/Header.js'
import SideBar from './components/SideBar.js'
import Profile from './components/Profile.js'

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <SideBar/>
      <Profile/>


      <footer className='app-footer'></footer>
    </div>
  );
}

export default App;
