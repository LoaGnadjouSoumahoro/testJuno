import React from "react";
import a from "./style.module.css";

const HomeImage = () => {
  return (
    <div className={`${a.box}`}>
      <img
        className={`${a.image}`}
        src="https://images.pexels.com/photos/20008913/pexels-photo-20008913/free-photo-of-neige-homme-amour-femme.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
        alt=""
      />
    </div>
  );
};

export default HomeImage;
