import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/contactsAction";

import "./Filter.css";

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

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
