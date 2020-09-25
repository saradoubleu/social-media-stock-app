import React from "react";
import { useTranslation } from "react-i18next";
import "./DropDown.css";

const DropDown = (props) => {
  const { t } = useTranslation();

  return (
    <div className="drop-down-menu">
      <label htmlFor="number-of-days"></label>{" "}
      <select id="number-of-days" name="select">
        <option value="1">1 {t("day")}</option>
        <option value="2">2 {t("days")}</option>
        <option value="3">3 {t("days")}</option>
        <option value="4">4 {t("days")}</option>
        <option value="5">5 {t("days")}</option>
        <option value="6">6 {t("days")}</option>
        <option value="7">7 {t("days")}</option>
        <option value="8">8 {t("days")}</option>
        <option value="9">9 {t("days")}</option>
        <option value="10">10 {t("days")}</option>
      </select>
    </div>
  );
};

export default DropDown;
