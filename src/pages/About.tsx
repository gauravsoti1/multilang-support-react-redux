import React, { FC } from "react";
import { useSelector } from "react-redux";
import aboutImg from "../assets/about.jpg";
import Header from "../components/Header";
import { translate } from "../i189";
import { RootState } from "../store";

const About: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);
  return (
    <>
      <Header />
      <section className="about">
        <div className="container">
          <h1>{translate("about", language)}</h1>
          <img src={aboutImg} alt="About Image" />
          <p>{translate("aboutUsText", language)}</p>
        </div>
      </section>
    </>
  );
};

export default About;
