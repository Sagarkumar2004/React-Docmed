import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
        <div class="ContactImage">
        <div class="Contact-text">
            <h1>Contact</h1>
            <h5>Home/Contact</h5>
        </div>
    </div>

      <div class="contact-container">
        <div class="input-box">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter subject"
          />
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Enter your Number"
          />
          <textarea
            name="massage"
            id="massage"
            placeholder="Describe your problem"
            cols="10"
            rows="6"
          ></textarea>
          <button id="submit">Send</button>
        </div>
        <div class="support-box">
          <div class="sm-box">
            <h5>Buttonwood, California.</h5>
            <p>Rosemead, CA 91770</p>
          </div>
          <div class="sm-box">
            <h5>+10 253 565 2365</h5>
            <p>Mon to Fri 9am to 6pm</p>
          </div>
          <div class="sm-box">
            <h5>support@docmed.com</h5>
            <p>Send us your query anytime!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
