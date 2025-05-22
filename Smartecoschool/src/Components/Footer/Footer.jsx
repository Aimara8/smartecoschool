import React from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Tiktok, Github, Instagram, Twiter } from "../SVG/SVG";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      {/* Redes Sociales */}

      <ul className="example-2">
        <li className="icon-content">
          <a
            href="https://www.facebook.com/profile.php?id=61553394718939"
            aria-label="Facebook"
            data-social="facebook"
            target="_blank"
          >
            <div className="filled"></div>
            <Facebook />
          </a>
          <div className="tooltip">Facebook</div>
        </li>
        <li className="icon-content">
          <a
            href="https://www.tiktok.com/@smartecoschool"
            aria-label="Tiktok"
            data-social="tiktok"
            target="_blank"
          >
            <div className="filled"></div>
            <Tiktok />
          </a>
          <div className="tooltip">Tiktok</div>
        </li>
        <li className="icon-content">
          <a
            href="https://www.github.com/"
            aria-label="GitHub"
            data-social="github"
            target="_blank"
          >
            <div className="filled"></div>
            <Github />
          </a>
          <div className="tooltip">GitHub</div>
        </li>
        <li className="icon-content">
          <a
            href="https://www.instagram.com/smartecoschool/?"
            aria-label="Instagram"
            data-social="instagram"
            target="_blank"
          >
            <div className="filled"></div>
            <Instagram />
          </a>
          <div className="tooltip">Instagram</div>
        </li>
        <li className="icon-content">
          <a
            href="https://x.com/SmartEcoSchool?t=SuhO1hHUGI8vEYTmusBaZw&s=09"
            aria-label="X"
            data-social="x"
            target="_blank"
          >
            <div className="filled"></div>
            <Twiter />
          </a>
          <div className="tooltip">X</div>
        </li>
      </ul>

      {/* Copyright */}
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} Smartecoschool. {t("footer.rights")}
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
