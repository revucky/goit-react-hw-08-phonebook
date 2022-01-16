import { useState, useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Switch } from "react-router-dom";
import { ThemeChange, themes } from "../../Context/themeContext";
import { ThemeSwitcher } from "../../Context/ThemeSwitcher/ThemeSwitcher";
import Navigation from "../header/Navigation";
import AuthNav from "../header/AuthNav";
import UserMenu from "../header/UserMenu";
import Spinner from "react-bootstrap/Spinner";
import authSelectors from "../../redux/auth/AuthSelectors";
import { useLocalStorage } from "react-use";
import authOperations from "../../redux/auth/AuthOperations";
import Loader from "react-loader-spinner";
import LangSwitcher from "../LangSwitcher/LangSwitcher.js";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppBar from "../AppBar/AppBar";
import s from "../AppBar/App.module.css";

// const HomeView = lazy(() => import("../../pages/HomeView/HomeView"));
// const RegisterView = lazy(() =>
//   import("../../pages/RegisterView/RegisterView")
// );
// const LoginView = lazy(() => import("../../pages/LoginView/LoginView"));
// const Phonebook = lazy(() => import("../Phonebook/Phonebook"));

const STORAGE = "theme";

const App = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useLocalStorage(STORAGE, themes.light);
  const loadingUser = useSelector((state) => state.auth.loadingUser);

  const toggleTheme = () =>
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  if (loadingUser) {
    return <Spinner animation="grow" />;
  }

  return (
    <>
      <div className={theme === themes.light ? s.lightTheme : s.darkTheme}>
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
          <ThemeChange.Provider value={{ theme, toggleTheme }}>
            <header className="header">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <LangSwitcher />
                <ThemeSwitcher />
                <Navigation />
              </div>
              {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </header>
            <AppBar />
          </ThemeChange.Provider>
          {/* <Switch>
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
        </Switch> */}
        </Suspense>
        <ToastContainer position="top-right" autoClose={2000} closeOnClick />
      </div>
    </>
  );
};

export default App;
