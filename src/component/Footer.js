import React from "react";
import "./Footer.css";
import logo from "../Image/logo2.webp";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-box1">
          <div className="logo">
            <img src={logo} alt="This is Logo" />
          </div>
          <br />
          <p>
            Firmament morning sixth subdue darkness creeping gathered divide.
          </p>
          <br />
          <i className="fa fa-facebook" style={{ fontSize: 40 }} />
          <i className="fa fa-twitter" style={{ fontSize: 40 }} />
          <i className="fa fa-instagram" style={{ fontSize: 40 }} />
        </div>
        <div className="footer-box2">
          <div className="foo">
            <h3>Departments</h3>
            <h6 className="line-hover">Eye care</h6>
            <h6 className="line-hover">Skin Care</h6>
            <h6 className="line-hover">Pathology</h6>
            <h6 className="line-hover">Medicine</h6>
            <h6 className="line-hover">Dental</h6>
          </div>
          <div className="foo">
            <h3>Useful Links </h3>
            <h6 className="line-hover">About </h6>
            <h6 className="line-hover">Blogs</h6>
            <h6 className="line-hover">Appoinment</h6>
            <h6 className="line-hover">Contact</h6>
          </div>
          <div className="foo">
            <h3>Address </h3>
            <h6> 200, A block , Mayur vihar phase-3 </h6>
            <h6>+10 3457 457</h6>
            <h6>docmed@contact.com</h6>
            <h6 />
          </div>
        </div>
      </div>
      <footer>
        <p>Copyright ©2022 All rights reserved @ Docmed.com </p>
      </footer>
    </>
  );
}
