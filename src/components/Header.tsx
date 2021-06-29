import React, { useCallback, useState, useEffect, useRef, FC } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { translate } from "../i189";
import { RootState } from "../store";
import { setLanguage } from "../store/actions/langActions";

interface HeaderProps {
  fixed?: boolean;
  transparent?: boolean;
}

const languages: string[] = ["EN", "DE", "FR"];

const languageSelector = (state: RootState) => state.lang;

const Header: FC<HeaderProps> = ({ fixed, transparent }: HeaderProps) => {
  const { language } = useSelector(languageSelector);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownEl = useRef<HTMLUListElement>(null);
  let headerClass = "header";
  if (fixed) headerClass += " header--fixed";
  if (transparent) headerClass += " header--transparent";

  const handleClickOutside = useCallback(
    (e) => {
      // if we haven't clicked on our own dropdown and clicked outside, then hide the
      // dropdown
      if (
        showDropdown &&
        e.target.closest(".dropdown") !== dropdownEl.current
      ) {
        setShowDropdown(false);
      }
    },
    [showDropdown, setShowDropdown, dropdownEl]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const chooseLanguageHandler = (value: string) => {
    setShowDropdown(false);
    dispatch(setLanguage(value));
  };

  const BrandLink = (
    <div className="header__brand">
      <h1>
        <Link to="/">React</Link>
      </h1>
    </div>
  );
  const NavList = (
    <ul className="header__nav_menu">
      <li>
        <NavLink to="/" exact>
          {translate("home", language)}
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" exact>
          {translate("about", language)}
        </NavLink>
      </li>
    </ul>
  );
  return (
    <header className={headerClass}>
      <div className="container">
        {BrandLink}
        <div className="header__nav">
          <div className="header_nav_lang">
            <p className="selected" onClick={() => setShowDropdown(true)}>
              {language}
            </p>
            {showDropdown && (
              <ul className="dropdown" ref={dropdownEl}>
                {languages.map((language) => (
                  <li
                    key={language}
                    onClick={() => chooseLanguageHandler(language)}
                  >
                    {language}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {NavList}
        </div>
      </div>
    </header>
  );
};

export default Header;
