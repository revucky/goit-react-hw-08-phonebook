import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/AuthOperations";
import { useTranslation } from "react-i18next";
import { Paper, Button } from "@mui/material";
import s from "../pages.module.css";
import { toast } from "react-toastify";

export default function LoginView() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
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

  useEffect(() => {
    if (!error) return toast.success("Welcome");
    toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    // toast.success("Welcome");
    setPassword("");
    setEmail("");
  };
  const isBtnDisabled = !email || !password;
  return (
    <div>
      <Paper className="paper" variant="outlined">
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
              pattern="[A-Za-z0-9]{4,}"
              title="Логін не может бути меншим за 4 латинських символів."
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
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
              title="Пароль не може бути меншим за вісім символів і має містити хоча б одну цифру, одну маленьку та одну велику латинську літеру."
              placeholder={t("pages.log.placeholderPas")}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            className={s.btn}
            variant="contained"
            type="submit"
            disabled={isBtnDisabled}
          >
            {t("pages.log.btn")}
          </Button>
          {/* <button className={s.btn} type="submit" disabled={isBtnDisabled}>
            {t("pages.log.btn")}
          </button> */}
        </form>
      </Paper>
    </div>
  );
}
