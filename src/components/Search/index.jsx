import React from "react";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

import styles from "./Search.module.scss";
import { useCallback } from "react";
import { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onCklickClear = () => {
    setSearchValue("");
    setValue("")
    inputRef.current.focus();
  };

  const updateSerachValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 300),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSerachValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img
        src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-512.png"
        width={"22px"}
        alt=""
        className={styles.icon}
      />

      <input
        ref={inputRef}
        onChange={onChangeInput}
        value={value}
        className={styles.input}
        placeholder="Поиск пиццы ..."
      />
      {value && (
        <img
          onClick={onCklickClear}
          src="https://cdn3.iconfinder.com/data/icons/feather-5/24/x-512.png"
          alt=""
          className={styles.clearIcon}
        />
      )}
    </div>
  );
};

export default Search;
