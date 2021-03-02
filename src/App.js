
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
        <SideBar state={props.state.sideBarData}/>

        <div className="app-wrapper__content">
          <Switch>
          <Route exact 
          path='/profile' 
          render={() => (
            <Profile profileData={props.state.profileData} dispatch={props.dispatch} />
          )}
          />
          <Route exact 
          path='/dialogs' 
          render={() => (
            <Dialogs dialogsData={props.state.dialogsData} dispatch={props.dispatch}/>
          )}
          /> 
          </Switch>

        </div>


        <footer className='app-footer'></footer>
      </div>
  );
}

export default App;
