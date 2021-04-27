import React from 'react'
import { Provider, connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { initilizeApp } from './redux/appReducer';
import SideBar from './components/SideBar/SideBar.js'
import Dialogs from './components/Dialogs/Dialogs.js';
import UsersContainer from './components/Users/UsersContainerWithHooks'; 
import ProfileContainer from './components/Profile/ProfileContainerWithHooks';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';


class App extends React.Component {
  componentDidMount() {
    this.props.initilizeApp();
  }

  render() {
    if (!this.props.isAppInitialized) return <Preloader/>

    return (
      <div className="app-wrapper">
        <header className="app-wrapper__header"><HeaderContainer /></header>
        
        <div className="app-wrapper__content">
          <div className="app-content__sidebar"><SideBar /></div>

          <div className="app-content__wrapper">
            <Switch>
              <Route path='/profile/:userId?' component={ProfileContainer} />
              <Route path='/dialogs' render={() => <Dialogs classF='red' />} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/login' render={() => <Login />} />
            </Switch>
          </div>

        </div>

        <footer className='app-wrapper__footer'></footer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAppInitialized: state.app.initialized,
})

export const AppContainer = connect(mapStateToProps, { initilizeApp })(App);

const MainApp = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}


export default MainApp
