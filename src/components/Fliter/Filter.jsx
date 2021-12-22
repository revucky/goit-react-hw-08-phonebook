import { useSelector, useDispatch } from "react-redux";
import contactsAction from "../../redux/contacts";

import "./Filter.css";

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  const { changeFilter } = contactsAction.actions;
  return (
    <div className="filterWrap">
      <p className="title-filter">Пошук по імені</p>
      <input
        className="input"
        type="text"
        name="filter"
        value={filter}
        placeholder="Почни вводити імʼя"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
