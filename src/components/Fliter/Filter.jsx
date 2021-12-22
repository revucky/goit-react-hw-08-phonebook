import { useSelector, useDispatch } from "react-redux";
import contactsAction from "../../redux/contacts";
import { useTranslation } from "react-i18next";
import "./Filter.css";

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { changeFilter } = contactsAction.actions;
  return (
    <div className="filterWrap">
      <p className="title-filter">{t("filter.p")}</p>
      <input
        className="input"
        type="text"
        name="filter"
        value={filter}
        placeholder={t("filter.filterPlaceholder")}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
