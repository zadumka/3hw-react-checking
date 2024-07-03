import css from "./SearchBox.module.css";
import { useId } from "react";
import { FaSistrix } from "react-icons/fa6";

export const SearchBox = ({ value, onSearch }) => {
  const id = useId();
  return (
    <div className={css.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        className={css.input}
        id={id}
        type="text"
        value={value}
        onChange={onSearch}
      />
      <FaSistrix className={css.icon} />
    </div>
  );
};
