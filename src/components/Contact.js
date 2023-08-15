import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  // const isValidEmail = email => {
  //     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return regex.test(String(email).toLowerCase());
  // };

  const submitForm = (e) => {
    e.preventDefault();
    
    if (name && email && message) {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const userId = process.env.REACT_APP_EMAILJS_USER_ID;

      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
      setTimeout(()=> {
        setEmailSent(false);
      }, 10000);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__title">
          <span>CONTACT</span>
          <h2>Let's Code Your Vision Together!</h2>
        </div>
        <div className="contact__form-container">
          <div className="contact__form">
            <form onSubmit={submitForm}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="25"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="submit__con">
                {emailSent ? <span>Email Sent !</span> : "" }
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
