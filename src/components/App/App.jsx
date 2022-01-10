import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Phonebook from "../Phonebook/Phonebook";
import Navigation from "../header/Navigation";
import AuthNav from "../header/AuthNav";
import UserMenu from "../header/UserMenu";
import HomeView from "../../pages/HomeView/HomeView";
import RegisterView from "../../pages/RegisterView/RegisterView";
import LoginView from "../../pages/LoginView/LoginView";
import authSelectors from "../../redux/auth/AuthSelectors";
import authOperations from "../../redux/auth/AuthOperations";
import { Suspense } from "react";
import Loader from "react-loader-spinner";
import LangSwitcher from "../LangSwitcher/LangSwitcher.js";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
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
      ></Suspense>
      <header className="header">
        <LangSwitcher />
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/contacts" component={Phonebook} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
      </Switch>
      <ToastContainer position="top-right" autoClose={2000} closeOnClick />
      {/* <Suspense fallback="">
        <Phonebook />
      </Suspense> */}
    </div>
  );
};

export default App;
