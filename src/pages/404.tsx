import React, { FC } from "react";
import { translate } from "../i189";
import { RootState } from "../store";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Page404: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);
  return (
    <div className="page-404">
      <div className="container">
        <h1>404</h1>
        <p>{translate("pageDoesNotExist", language)}</p>
        <p>
          <Link to="/">{translate("returnToHomepage", language)}</Link>
        </p>
      </div>
    </div>
  );
};

export default Page404;
