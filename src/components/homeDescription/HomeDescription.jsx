import React from "react";
import a from "./style.module.css";

const HomeDescription = () => {
  return (
    <div className={`${a.box}`}>
      <h1>iJuno is your family's digital assistant</h1>
      <p>
        Add an <strong>extra brain</strong> to your family to stay on top of
        family's needs and teach kids collaboration around family projects and
        chores.
        <br />
      </p>
      <button className={`${a.buttonPrimary2}`}>JOIN THE WAINTING LIST</button>
    </div>
  );
};

export default HomeDescription;
