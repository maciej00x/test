import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-style">
      <div className="container footer-style">
        <div className="footer-info">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2023
        </div>
        <div className="footer-logo-style">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebookSquare} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;