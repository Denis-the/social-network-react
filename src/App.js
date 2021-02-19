
import './App.css';

import Header from './components/Header/Header.js'
import SideBar from './components/SideBar/SideBar.js'
import Profile from './components/Profile/Profile.js'
import Dialogs from './components/Dialogs/Dialogs.js';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <SideBar />

        <div className="app-wrapper__content">
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />

        </div>


        <footer className='app-footer'></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
