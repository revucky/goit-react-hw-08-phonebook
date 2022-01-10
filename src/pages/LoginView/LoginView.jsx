import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/AuthOperations";
import { useTranslation } from "react-i18next";
import s from "../pages.module.css";
import { toast } from "react-toastify";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case "email":
  //       return setEmail(value);
  //     case " password":
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    toast.success("Welcome");
    setPassword("");
    setEmail("");
  };
  const isBtnDisabled = !email || !password;
  return (
    <div>
      <h1 className={s.title}>{t("pages.log.title")}</h1>
      <form className={s.forma} onSubmit={handleSubmit} autoComplete="off">
        <div className="wrap">
          <label className={s.label}>{t("pages.log.label")}</label>
          <input
            className={s.input}
            type="email"
            placeholder={t("pages.log.placeholder")}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="wrap">
          <label className={s.label}>{t("pages.log.labelPas")}</label>
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            placeholder={t("pages.log.placeholderPas")}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={s.btn} type="submit" disabled={isBtnDisabled}>
          {t("pages.log.btn")}
        </button>
      </form>
    </div>
  );
}
