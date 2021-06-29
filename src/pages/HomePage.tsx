import React, { FC } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { translate } from "../i189";
import { RootState } from "../store";

const HomePage: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);
  return (
    <>
      <Header fixed transparent />
      <section className="intro">
        <div className="intro__overlay">
          <div className="intro__body">
            <h1>React</h1>
            <p>{translate("introText", language)}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
