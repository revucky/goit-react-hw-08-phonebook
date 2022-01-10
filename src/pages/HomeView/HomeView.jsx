import { useTranslation } from "react-i18next";
import s from "../pages.module.css";

const HomeView = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className={s.title}>{t("pages.home")} 👋🏼</h1>
    </div>
  );
};
export default HomeView;
