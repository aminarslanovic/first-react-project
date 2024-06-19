import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="info">
        <h1>SAKIley</h1>
        <h5>Stevana Nemanje 47</h5>
        <h5>Novi Pazar 36300</h5>
        <h5>Phone:063-842-42-88</h5>
        <h5>E-mail:hsaladin06@gmail.com</h5>
      </div>
      <div className="icons">
        <FaInstagram size="50px" className="instagram" />
        <CiFacebook size="50px" />
        <CiTwitter size="50px" />
      </div>
    </footer>
  );
}