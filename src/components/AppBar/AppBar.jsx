import { Switch } from "react-router-dom";
import { lazy, Suspense, useContext } from "react";
import PrivatRoute from "../header/PrivatRoute";
import { ThemeChange, themes } from "../../Context/themeContext";
import PublicRoute from "../header/PublicRoute";
import s from "./App.module.css";

const HomeView = lazy(() => import("../../pages/HomeView/HomeView"));
const RegisterView = lazy(() =>
  import("../../pages/RegisterView/RegisterView")
);
const LoginView = lazy(() => import("../../pages/LoginView/LoginView"));
const Phonebook = lazy(() => import("../Phonebook/Phonebook"));

const AppBar = () => {
  const { theme } = useContext(ThemeChange);
  return (
    <main className={theme === themes.light ? s.lightTheme : s.darkTheme}>
      <Suspense fallback={<p>....</p>}>
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
    </main>
  );
};

export default AppBar;
