import { useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch } from "react-router-dom";

import Navigation from "../header/Navigation";
import AuthNav from "../header/AuthNav";
import UserMenu from "../header/UserMenu";
import Spinner from "react-bootstrap/Spinner";
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
    return <Spinner animation="grow" />;
  }
  return (
    <>
      <header className="header">
        <Suspense fallback={<p>...</p>}>
          <LangSwitcher />
        </Suspense>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
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
        <Switch>
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
        </Switch>
      </Suspense>
      <ToastContainer position="top-right" autoClose={2000} closeOnClick />
    </>
  );
};

export default App;
