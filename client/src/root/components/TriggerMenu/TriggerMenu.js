import React from "react";
import { Menu } from "antd";
import { TriggerDropItem } from "./../TriggerDropItem/TriggerDropItem";
import { IReply } from "../../assets/icon/IReply";
import { IEdit } from "./../../assets/icon/IEdit";
import { ICopy } from "./../../assets/icon/ICopy";
import { IToFix } from "./../../assets/icon/IToFix";
import { IForward } from "./../../assets/icon/IForward";
import { IChoose } from "./../../assets/icon/IChoose";
import { IDelete } from "./../../assets/icon/IDelete";
import styles from "./index.module.css";

export const TriggerMenu = () => {
  return (
    <Menu className={styles.triggerMenu}>
      <Menu.Item key="one" onClick={() => console.log("reply")}>
        <TriggerDropItem text={"Ответить"} LeftIcon={IReply} />
      </Menu.Item>
      <Menu.Item key="two" onClick={() => console.log("edit")}>
        <TriggerDropItem text={"Изменить"} LeftIcon={IEdit} />
      </Menu.Item>
      <Menu.Item key="three" onClick={() => console.log("copy")}>
        <TriggerDropItem text={"Копировать"} LeftIcon={ICopy} />
      </Menu.Item>
      <Menu.Item key="free" onClick={() => console.log("fix")}>
        <TriggerDropItem text={"Закрепить"} LeftIcon={IToFix} />
      </Menu.Item>
      <Menu.Item key="four" onClick={() => console.log("forward")}>
        <TriggerDropItem text={"Переслать"} LeftIcon={IForward} />
      </Menu.Item>
      <Menu.Item key="six" onClick={() => console.log("Choode")}>
        <TriggerDropItem text={"Выбрать"} LeftIcon={IChoose} />
      </Menu.Item>
      <Menu.Item key="seven" onClick={() => console.log("Delete")}>
        <TriggerDropItem text={"Удалить"} LeftIcon={IDelete} />
      </Menu.Item>
    </Menu>
  );
};
