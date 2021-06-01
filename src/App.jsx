import React, { Suspense, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./redux/redux-store";
import { useInitializeAppFn } from "./hooks/appHooks";
import { getIsInitialized } from "./redux/selectors/appSelectors";
import SideBar from "./components/SideBar/SideBar";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import NotFound from "./components/404-Not-found/404";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainerWithHooks")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainerWithHooks")
);
const SettingsContainer = React.lazy(() =>
import("./components/Settings/SettingsContainer")
);
// const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"));

const App = () => {
  const initilizeApp = useInitializeAppFn();
  const isAppInitialized = useSelector(getIsInitialized);

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
              <Route exact path="/"  component={ProfileContainer} />
              <Route path="/profile/:userId?" component={ProfileContainer} />
              {/* <Route path="/dialogs" render={() => <Dialogs />} /> */}
              <Route exact path="/users" render={() => <UsersContainer />} />
              <Route exact path="/settings" render={() => <SettingsContainer />} />
              <Route exact path="/login" render={() => <Login />} />
              <Route render={() => <NotFound />} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const MainApp = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);
export default MainApp;
