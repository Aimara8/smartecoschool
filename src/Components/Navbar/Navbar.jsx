import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "../../assets/SVG/SVG";
import logo from "../../assets/logo.webp";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState("es");
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelected(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ToggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            {t("navbar.home")}
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            {t("navbar.objectives")}
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-180} duration={500}>
            {t("navbar.casesofuse")}
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            {t("navbar.functioning")}
          </Link>
        </li>
        <li>
          <Link to="about-container" smooth={true} offset={-200} duration={500}>
            {t("navbar.aboutUs")}
          </Link>
        </li>
        <li>
          <Link
            to="collaborators-section"
            smooth={true}
            offset={0}
            duration={500}
          >
            {t("navbar.colaborators")}
          </Link>
        </li>
        <li>
          <a
            href="https://wiki.ieselrincon.es/index.php?title=SmartEcoSchool"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">{t("navbar.wiki")}</button>
          </a>
        </li>
      </ul>

      {/* Botones de idioma */}
      <div className={mobileMenu ? "show-lang-buttons" : "hide-lang-buttons"}>
        <button
          onClick={() => changeLanguage("en")}
          className={`btn-lang ${selected === "en" ? "en" : ""}`}
        >
          En
        </button>
        <button
          onClick={() => changeLanguage("es")}
          className={`btn-lang ${selected === "es" ? "es" : ""}`}
        >
          Es
        </button>
      </div>

      {/* Ícono del menú */}
      <Menu className="menu-icon" openMenu={ToggleMenu} />
    </nav>
  );
};

export default Navbar;
