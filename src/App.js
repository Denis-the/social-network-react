
import './App.css';
import React from 'react'
import Header from './components/Header/Header.js'
import SideBar from './components/SideBar/SideBar.js'
import Dialogs from './components/Dialogs/Dialogs.js';
import { Route, Switch } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


function App(props) {
  return (

    <div className="app-wrapper">
      <Header />
      <SideBar store={props.store} />

      <div className="app-wrapper__content">
        <Switch>
          <Route 
            path='/profile/:userId?'
            render={() => (
              <ProfileContainer />
            )}
          />
          <Route 
            path='/dialogs'
            render={() => (
              <Dialogs />
            )}
          />
          <Route 
            path='/users'
            render={() => (
              <UsersContainer />
            )}
          />
        </Switch>

      </div>

      <footer className='app-footer'></footer>
    </div>
  );
}

export default App;
