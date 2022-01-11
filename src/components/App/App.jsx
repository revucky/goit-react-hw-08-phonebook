import { useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
// import Phonebook from "../Phonebook/Phonebook";
import Navigation from "../header/Navigation";
import AuthNav from "../header/AuthNav";
import UserMenu from "../header/UserMenu";
// import HomeView from "../../pages/HomeView/HomeView";
// import RegisterView from "../../pages/RegisterView/RegisterView";
// import LoginView from "../../pages/LoginView/LoginView";
import authSelectors from "../../redux/auth/AuthSelectors";
import PrivatRoute from "../header/PrivatRoute";
import PublicRoute from "../header/PublicRoute";
import authOperations from "../../redux/auth/AuthOperations";

import Loader from "react-loader-spinner";
import LangSwitcher from "../LangSwitcher/LangSwitcher.js";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeView = lazy(() => import("../../pages/HomeView/HomeView"));
const RegisterView = lazy(() =>
  import("../../pages/RegisterView/RegisterView")
);
const LoginView = lazy(() => import("../../pages/LoginView/LoginView"));
const Phonebook = lazy(() => import("../Phonebook/Phonebook"));

const App = () => {
  const dispatch = useDispatch();
  const loadingUser = useSelector((state) => state.auth.loadingUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  if (loadingUser) {
    return (
      <Loader
        type="Bars"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    );
  }
  return (
    <>
      <header className="header">
        <LangSwitcher />
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Switch>
        <Suspense
          fallback={
            <Loader
              type="Bars"
              color="#00BFFF"
              height={80}
              width={80}
              timeout={3000}
            />
          }
        >
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute exact path="/login" restricted>
            <LoginView />
          </PublicRoute>
          <PrivatRoute path="/contacts">
            <Phonebook />
          </PrivatRoute>
        </Suspense>
      </Switch>
      <ToastContainer position="top-right" autoClose={2000} closeOnClick />
    </>
  );
};

export default App;
