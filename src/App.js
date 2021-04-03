
import './App.css';
import React from 'react'
import SideBar from './components/SideBar/SideBar.js'
import Dialogs from './components/Dialogs/Dialogs.js';
import { Route, Switch } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainerWithHooks';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { useDispatch } from 'react-redux';
import { getAuthUserData } from './redux/authReducer';


function App(props) {
  const dispatch = useDispatch()
  dispatch(getAuthUserData())

  return (

    <div className="app-wrapper">
      <HeaderContainer />
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

          <Route 
            path='/login'
            render={() => (
              <Login />
            )}
          />
        </Switch>

      </div>

      <footer className='app-footer'></footer>
    </div>
  );
}

export default App;
