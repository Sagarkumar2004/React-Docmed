import React from "react";
import "./Doctor.css";
import doctor2 from "../Image/doctor2.jpg"
import doctor4 from "../Image/doctor4.jpg"
import doctor5 from "../Image/doctor5.jpg"
import doctor9 from "../Image/doctor9.jpg";
import doctor10 from "../Image/doctor10.jpg";
import doctor11 from "../Image/doctor11.jpg";
import doctor12 from "../Image/doctor12.jpg";
import doctor13 from "../Image/doctor13.jpg";

export default function Doctor() {
  return (
    <>
  <div class="AboutImage">
        <div class="About-text">
            <h1>Doctors</h1>
        <h5>Home/Doctors</h5>
        </div>
    </div>

      <div className="container">
        <div className="box">
          <img src={doctor5} alt="Deepak" width="400px" />
          <h2>Dr. Deepak</h2>
          <p>Nourologist</p>
        </div>
        <div className="box">
          <img src={doctor9} alt="Sagar" width="400px" />
          <h2>Dr. Sagar kumar</h2>
          <p>Dentist</p>
        </div>
        <div className="box">
          <img src={doctor2} alt="Sanchit" width="400px" />
          <h2>Dr. Sanchit Mishra</h2>
          <p>Surgoens</p>
        </div>
        <div className="box">
          <img src={doctor4} alt="Nora" width="400px" />
          <h2>Dr. Nora</h2>
          <p>Orthopedic</p>
        </div>
        <div className="box">
          <img src={doctor11} alt="Parveen" width="400px" />
          <h2>Dr. Parveen Gupta</h2>
          <p>Gynecologist</p>
        </div>
        <div className="box">
          <img src={doctor10} alt="Aditi" width="400px" />
          <h2>Dr. Aditi singh</h2>
          <p>Cardiologist</p>
        </div>
        <div className="box">
          <img src={doctor12} alt="Juli" width="400px" />
          <h2>Dr. Juli</h2>
          <p>Dermatologists</p>
        </div>
        <div className="box">
          <img src={doctor13} alt="Aliya" width="400px" />
          <h2>Dr. Aliya </h2>
          <p>Pediatricians</p>
        </div>
      </div>
    </>
  );
}
