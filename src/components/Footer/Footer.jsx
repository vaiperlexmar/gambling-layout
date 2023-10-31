import React from "react";
import { useEffect, useState } from "react";
import TwitterImg from "../../assets/Footer/twitter.svg";
import FacebookImg from "../../assets/Footer/facebook.svg";
import InstagramImg from "../../assets/Footer/instagram.svg";
import LinkidinImg from "../../assets/Footer/linkidin.svg";
import YoutubeImg from "../../assets/Footer/youtube.svg";
import TiktokImg from "../../assets/Footer/tiktok.svg";
import TelegramImg from "../../assets/Footer/telegram.svg";
import VkImg from "../../assets/Footer/vk.svg";

const Footer = ({ isHamburgerClicked }) => {
  const [footerAnimation, setFooterAnimation] = useState("slide-top");

  useEffect(() => {
    if (isHamburgerClicked) {
      setFooterAnimation("slide-bottom");
      const timeout = setTimeout(() => {
        setFooterAnimation("footer_hidden");
      }, 300);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setFooterAnimation("footer_visible slide-top-in-appear");
      }, 500);
    }
  }, [isHamburgerClicked]);

  return (
    <footer className={`footer ${footerAnimation}`}>
      <div className="footer__links">
        <a className="footer__link tiny-text" href="#">
          Terms & Conditions
        </a>
        <a className="footer__link tiny-text" href="#">
          Cookies
        </a>
        <a className="footer__link tiny-text" href="#">
          Contacts
        </a>
        <a className="footer__link tiny-text" href="#">
          Careers
        </a>
        <a className="footer__link tiny-text" href="#">
          Brand Guide
        </a>
      </div>
      <p className="footer__heading tiny-text">Our social media:</p>
      <div className="footer__social">
        <a className="footer__social-btn" id="twitter" href="#">
          <img className="footer__social-img" src={TwitterImg} />
        </a>
        <a className="footer__social-btn" id="facebook" href="#">
          <img className="footer__social-img" src={FacebookImg} />
        </a>
        <a className="footer__social-btn" id="instagram" href="#">
          <img className="footer__social-img" src={InstagramImg} />
        </a>
        <a className="footer__social-btn" id="linkidin" href="#">
          <img className="footer__social-img" src={LinkidinImg} />
        </a>
        <a className="footer__social-btn" id="youtube" href="#">
          <img className="footer__social-img" src={YoutubeImg} />
        </a>
        <a className="footer__social-btn" id="tiktok" href="#">
          <img className="footer__social-img" src={TiktokImg} />
        </a>
        <a className="footer__social-btn" id="telegram" href="#">
          <img className="footer__social-img" src={TelegramImg} />
        </a>
        <a className="footer__social-btn" id="vk" href="#">
          <img className="footer__social-img" src={VkImg} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
