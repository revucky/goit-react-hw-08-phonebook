import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import s from "./Header.module.css";

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <nav className={s.nav}>
      <NavLink to="/" exact className={s.title} activeClassName={s.activeLink}>
        {t("header.nav.main")}
      </NavLink>
      <NavLink
        to="/contacts"
        className={s.title}
        activeClassName={s.activeLink}
      >
        {t("header.nav.contacts")}
      </NavLink>
    </nav>
  );
};
export default Navigation;
