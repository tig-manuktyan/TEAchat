import React from "react";
import styled from "styled-components";
import styles from "./index.module.css";
import { ISearch } from "./../../assets/icon/ISearch";
const Search = styled.input`
  font-size: 14px;
  color: white;
  background: transparent;
  border: 0;
  width: 90%;
  outline: 0;
`;
export const InputSearch = () => {
  return (
    <div className={styles.inputContainer}>
      <Search />
      <ISearch />
    </div>
  );
};
