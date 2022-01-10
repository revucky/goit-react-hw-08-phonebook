import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/AuthSelectors";
import authOperations from "../../redux/auth/AuthOperations";
import { useTranslation } from "react-i18next";
import defaultAvatar from "./avatar.png";
import s from "./Header.module.css";
import { toast } from "react-toastify";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;
  const { t } = useTranslation();

  const notify = () => toast.info("Are you back?");

  return (
    <div className={s.userwrap}>
      <img src={avatar} width="30" alt="avatar" />
      <span className={s.titleuser}>
        {t("header.usermenu.welcome")}, {name}
      </span>
      <button
        className={s.userBtn}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        {t("header.usermenu.btn")}
      </button>
    </div>
  );
};
export default UserMenu;
