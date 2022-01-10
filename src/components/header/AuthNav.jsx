import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import s from "./Header.module.css";

const AuthNav = () => {
  const { t } = useTranslation();
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.title}
        activeClassName={s.activeLink}
      >
        {t("header.authNav.reg")}
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.title}
        activeClassName={s.activeLink}
      >
        {t("header.authNav.log")}
      </NavLink>
    </div>
  );
};
export default AuthNav;
