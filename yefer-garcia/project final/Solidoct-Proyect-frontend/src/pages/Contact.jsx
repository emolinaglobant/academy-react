import axios from "axios";
import React, { useState } from "react";
import { verifyEmail } from "../test";
import { dinamicTitle } from "../utils/dinamicTitle";

const Contact = () => {
  dinamicTitle("Solidoct | Contact");

  const [name, setName] = useState();

  const [email, setEmail] = useState();

  const [phone, setPhone] = useState();

  const [subject, setSubject] = useState();

  const sendEmail = (event) => {
    event.preventDefault();
    const contend = {
      Client: name,
      Email_Client: email,
      Phone_Client: phone,
      subject: " Solidoct Peru Contact-Page",
      message: subject,
    };
    axios.post("https://formspree.io/f/xrgjkjdr", contend).then((res) => {
      if (res.data.ok === true) {
        alert("Your email has been sent successfully ✔");
        alert(
          "The SOLIDOCT customer service team will be contacting you shortly"
        );
        setEmail("");
        setName("");
        setPhone("");
        setSubject("");
      } else {
        alert("Opss An error has occurred... ❌");
        alert("Try again later!");
      }
    });
  };

  return (
    <main>
      <section className="contact-img">
        <img src="/imagenes-solidoct/receptionists.jpg" alt="" />
        <article className="contend-text">
          <h3>Contact us Now!!</h3>
          <p>
            Generating <span>SOLID</span> solutions to your problems.
          </p>
        </article>
      </section>

      <section className="contact" id="contact">
        <h1 data-aos="fade-right">Contact</h1>
        <article className="card-contact">
          <section className="col">
            <form id="form-contact">
              <input
                type="text"
                name="name"
                placeholder="Name"
                data-aos="fade-left"
                value={name}
                id="name"
                onChange={(event) => {
                  setName(event.currentTarget.value);
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                data-aos="fade-left"
                value={email}
                onChange={(event) => {
                  setEmail(event.currentTarget.value);
                }}
                id="email"
              />

              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                data-aos="fade-left"
                value={phone}
                onChange={(event) => {
                  setPhone(event.currentTarget.value);
                }}
              />
              <textarea
                name="subject"
                cols="20"
                rows="3"
                placeholder="Subject"
                data-aos="fade-left"
                value={subject}
                onChange={(event) => {
                  setSubject(event.currentTarget.value);
                }}
              ></textarea>

              <button
                type="submit"
                className="btn"
                data-aos="zoom-in"
                onClick={(event) => sendEmail(event)}
              >
                Send
              </button>
            </form>
          </section>
          <section className="col">
            <div className="mapouter" data-aos="fade-up">
              <div className="gmap_canvas">
                <iframe
                  width="1100"
                  height="400"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=av%201ero%20de%20mayo%20villa%20el%20salvador&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  scrolling="no"
                ></iframe>
                <a href="https://putlocker-is.org"></a>
                <br />
              </div>
            </div>
          </section>
        </article>
      </section>
    </main>
  );
};

export default Contact;
