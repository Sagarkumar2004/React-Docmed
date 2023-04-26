import React from "react";
import "./Home.css";

import p1 from "../Image/p1.jpg";
import doc2 from "../Image/doc2.jpg";
import doc3 from "../Image/doc3.jpg";
import p4 from "../Image/p4.jpg";
import p6 from "../Image/p6.jpg";
import doc1 from "../Image/doc1.jpg";
import doctor8 from "../Image/doctor8.jpg";
import doctor9 from "../Image/doctor9.jpg";
import doctor2 from "../Image/doctor2.jpg";
import doctor4 from "../Image/doctor4.jpg";
export default function Home() {
  return (
    <>
      <div className="homeImage">
        <div className="home-text">
          <h1>Health Care</h1>
          <h1 className="thinertext">For Hole Family</h1>
          <p className="thinertext">
            In healthcare secot, service excellence is the facility of the
            hospital as healthcare service provided to consistently.
          </p>
          <br />
          <br />
          <div className="btn">Check our Service</div>
        </div>
      </div>

      <div className="service">
        <div className="servicebox1">
          <i className="	fa fa-heartbeat" style={{ fontSize: 50 }} />
          <h2>Hospitality</h2>
          <p>
            Clinical excellence must be the priority for any health care service
            provider.
          </p>
          <button className="serviceBtn">Apply for a Bed</button>
        </div>
        <div className="servicebox2">
          <i className="fa fa-phone" style={{ fontSize: 50 }} />
          <h2>Emergency Care</h2>
          <p>
            Clinical excellence must be the priority for any health care service
            provider.
          </p>
          <button className="serviceBtn">+123-435-576</button>
        </div>
        <div className="servicebox1">
          <i className="fa fa-medkit" style={{ fontSize: 50 }} />
          <h2>Chamber Service</h2>
          <p>
            Clinical excellence must be the priority for any health care service
            provider.
          </p>
          <button className="serviceBtn">Make an appoinment</button>
        </div>
      </div>
      <div className="docmed">
        <div className="doubleImg">
          <div className="imgbox1" />
          <div className="imgbox2" />
        </div>
        <div className="doc-text">
          <h3>Welcome to docmed</h3>
          <div className="color-line" />
          <br />
          <h1>Best Care For Your Good Health</h1>
          <br />
          <p className="thinertext">
          It encompasses a wide range of services, from primary care and preventive measures to emergency care and advanced medical procedures. 
          Healthcare professionals, such as doctors, nurses, and other healthcare providers, work together to diagnose, treat, and manage 
          various health conditions and illnesses. 
          </p>
          <br />
          <ul>
            <li>
              <input
                type="checkbox"
                defaultChecked="checked"
                disabled="disabled"
              />
              Apartments frequently or motionless.
            </li>
            <li>
              <input
                type="checkbox"
                defaultChecked="checked"
                disabled="disabled"
              />
              Duis aute irure dolor in reprehenderit in voluptate.
            </li>
            <li>
              <input
                type="checkbox"
                defaultChecked="checked"
                disabled="disabled"
              />
              Voluptatem quia voluptas sit aspernatur.
            </li>
          </ul>
          <br />
          <br />
          <button className="btn2">Lean More</button>
        </div>
      </div>

      {/* Depatment */}

      <div className="homeDeparment">
        <div className="uper-text">
          <h1>Our Departments</h1>
          <div className="color-line2" />
          <br />
          <p>
            Esteem spirit temper too say adieus who direct esteem. It esteems
            luckily or picture placing drawing.
          </p>
        </div>
        <div className="content-box">
          <div className="box">
            <img src={doc1} alt="this is skin surgery Image" width="400px" />
            <h2>Skin Surgery</h2>
            <p>Esteem spirit temper too say adieus who direct esteem.</p>
            <h4 className="line-hover">Lean more</h4>
          </div>
          <div className="box">
            <img
              src={p1}
              alt="this is skin Physical therapy Image"
              width="400px"
            />
            <h2>Physical Therapy</h2>
            <p>Esteem spirit temper too say adieus who direct esteem.</p>
            <h4 className="line-hover">Lean more</h4>
          </div>
          <div className="box">
            <img src={doc2} alt="this is skin Dental Image" width="400px" />
            <h2>Dental Care</h2>
            <p>Esteem spirit temper too say adieus who direct esteem.</p>
            <h4 className="line-hover">Lean more</h4>
          </div>
          <div className="box">
            <img src={doc3} alt="this is skin diagnostic Image" width="400px" />
            <h2>Diagnostic Test</h2>
            <p>Esteem spirit temper too say adieus who direct esteem.</p>
            <h4 className="line-hover">Lean more</h4>
          </div>
          <div className="box">
            <img src={p4} width="400px" />
            <h2>Eye Care</h2>
            <p>Esteem spirit temper too say adieus who direct esteem.</p>
            <h4 className="line-hover">Lean more</h4>
          </div>
          <div className="box">
            <img src={p6} alt="this is surgery Image" width="400px" />
            <h2>Surgery Service</h2>
            <p>Esteem spirit temper too say adieus who direct esteem.</p>
            <h4 className="line-hover">Lean more</h4>
          </div>
        </div>
      </div>
      <div className="compney-viwes">
        <div className="co-text">
          <p>
            "Doec imperdiet congue orci consequat mattis Donec rutrun porttitor
          </p>
          <p>
            Sollicitudin. pellentesque id dolor tempor sapien feugiat ultrices
            nec sed neque.
          </p>
          <p>fusce ac mattis nulla. Morbi eget ornate dui."</p>
          <br />
          <br />
          <h5>Asana kolin</h5>
          <div className="color-line2" />
        </div>
      </div>
      <div className="content-text">
        <div className="content-icon">
          <div className="icon">
            <i className="fa fa-medkit" style={{ fontSize: 50 }} />
          </div>
          <h2>Leading edge care for Your family</h2>
          <br />
          <p>
            Esteem spirit temper too say adieus who direct esteem. It esteems
            luckily picture placing drawing. Apartments frequently or motionless
            on reasonable projecting expression.
          </p>
        </div>
        <div className="content-image" />
      </div>
      <div className="expert-doctor">
        <h1>Expert Doctors</h1>
        <br />
        <br />
        <div className="doc-container">
          <div className="doc-box">
            <img src={doctor8} alt="Deepak" />
            <h3>Dr. Deepak singh</h3>
            <p>Nourologist</p>
          </div>
          <div className="doc-box">
            <img src={doctor9} alt="Sagar" />
            <h3>Dr. Sagar singh</h3>
            <p>Dentist</p>
          </div>
          <div className="doc-box">
            <img src={doctor2} alt="Sanchit" />
            <h3>Dr. Sanchit mishra</h3>
            <p>Surgoens</p>
          </div>
          <div className="doc-box">
            <img src={doctor4} alt="Nora" />
            <h3>Dr. Nora</h3>
            <p>Orthopedic</p>
          </div>
        </div>
      </div>
    </>
  );
}
