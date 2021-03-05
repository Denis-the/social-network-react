
import './App.css';
import React from 'react'
import Header from './components/Header/Header.js'
import SideBar from './components/SideBar/SideBar.js'
import Profile from './components/Profile/Profile.js'
import Dialogs from './components/Dialogs/Dialogs.js';
import { Route, Switch } from 'react-router-dom';


function App(props) {
  return (

      <div className="app-wrapper">
        <Header />
        <SideBar store={props.store}/>

        <div className="app-wrapper__content">
          <Switch>
          <Route exact 
          path='/profile' 
          render={() => (
            <Profile store={props.store}/>
          )}
          />
          <Route exact 
          path='/dialogs' 
          render={() => (
            <Dialogs store={props.store}/>
          )}
          /> 
          </Switch>

        </div>

        <footer className='app-footer'></footer>
      </div>
  );
}

export default App;
