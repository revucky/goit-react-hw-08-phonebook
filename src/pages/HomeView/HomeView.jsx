import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Paper } from "@mui/material";
import authSelectors from "../../redux/auth/AuthSelectors";
import s from "../pages.module.css";

const HomeView = () => {
  const { t } = useTranslation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <h1 className={s.title}>{t("pages.home")} 👋🏼</h1>
      <Paper className="paper">
        {isLoggedIn ? (
          <p style={{ fontFamily: "Ubuntu", fontSize: 19 }}>
            {t("pages.authText")}
          </p>
        ) : (
          <p style={{ fontFamily: "Ubuntu", fontSize: 19 }}>
            {t("pages.notAuthText")}
          </p>
        )}
      </Paper>
    </div>
  );
};
export default HomeView;
