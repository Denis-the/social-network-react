import React, { Suspense, useEffect } from "react";
import { Provider, connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import SideBar from "./components/SideBar/SideBar";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import NotFound from "./components/404-Not-found/404";
import { useInitializeAppFn } from "./hooks/appHooks";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainerWithHooks")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainerWithHooks")
);
// const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"));
const SettingsContainer = React.lazy(() =>
  import("./components/Settings/SettingsContainer")
);

const App = ({ isAppInitialized }) => {
  const initilizeApp = useInitializeAppFn();
  useEffect(() => {
    initilizeApp();
  }, []);

  if (!isAppInitialized) return <Preloader />;

  return (
    <div className="app-wrapper">
      <header className="app-wrapper__header">
        <HeaderContainer />
      </header>

      <div className="app-wrapper__content">
        <div className="app-content__sidebar">
          <SideBar />
        </div>

        <div className="app-content__wrapper">
          <Suspense
            fallback={
              <>
                <div>loading...</div>
                <Preloader />
              </>
            }
          >
            <Switch>
              <Route path="/" exact component={ProfileContainer} />
              <Route path="/profile/:userId?" component={ProfileContainer} />
              {/* <Route path="/dialogs" render={() => <Dialogs />} /> */}
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/settings" render={() => <SettingsContainer />} />
              <Route path="/login" render={() => <Login />} />
              <Route render={() => <NotFound />} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  isAppInitialized: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAppInitialized: state.app.initialized,
});

export const AppContainer = connect(mapStateToProps, {})(App);
const MainApp = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
);
export default MainApp;
