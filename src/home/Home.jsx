import React from "react";
import Menu from "../components/Menu/Menu";

import Title from "../components/title/Title";
import HomeDescription from "../components/homeDescription/HomeDescription";
import HomeImage from "../components/homeImage/HomeImage";
import HomeText from "../components/homeText/HomeText";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <section>
        <div className="layoutHome">
          <div className="menu">
            <Menu />
          </div>
          <div className="title centered">
            <Title />
          </div>
          <div className="homeDescription">
            <HomeDescription />
          </div>
          <div className="homeImage">
            <HomeImage />
          </div>
          <div className="homeText">
            <HomeText />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
