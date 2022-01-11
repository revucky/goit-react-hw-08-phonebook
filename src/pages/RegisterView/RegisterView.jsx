import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/AuthOperations";
import { Button } from "@mui/material";
// import Fingerprint from "@mui/icons-material/Fingerprint";
import { useTranslation } from "react-i18next";
import s from "../pages.module.css";
import { toast } from "react-toastify";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.auth.error);

  const { t } = useTranslation();

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password })).then(() =>
      toast.success(`Registration is success, ${name}`)
    );
    // toast.success(`Registration is success, ${name}`);
    // setName("");
    // setPassword("");
    // setEmail("");
  };

  const isBtnDisabled = !name || !email || !password;
  return (
    <div>
      <h1 className={s.title}>{t("pages.reg.title")}</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={s.forma}>
        <div className="wrap">
          <label className={s.label}>{t("pages.reg.labelNam")}</label>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder={t("pages.reg.placeholderNam")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="wrap">
          <label className={s.label}>{t("pages.reg.label")}</label>
          <input
            className={s.input}
            type="email"
            placeholder={t("pages.reg.placeholder")}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="wrap">
          <label className={s.label}>{t("pages.reg.labelPas")}</label>
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            placeholder={t("pages.reg.placeholderPas")}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          color="success"
          variant="contained"
          type="submit"
          disabled={isBtnDisabled}
        >
          {/* <button type="submit" disabled={isBtnDisabled}> */}
          {t("pages.reg.btn")}
          {/* </button> */}
        </Button>
      </form>
    </div>
  );
}
