import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/Contact.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    const contactTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact",
        start: "top 70%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    contactTl.from(".contact__title p", { y: 50, opacity: 0, duration: 0.5 });
    contactTl.from(".name__email label, .name__email input, .textarea label, .textarea textarea", { y: 50, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3");
    contactTl.from(".submit__con", { opacity: 0, duration: 0.5 });
  }, []);

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
          <p>Let's Code Your Vision Together!</p>
        </div>
        <div className="contact__form-container">
          <div className="contact__form">
            <form onSubmit={submitForm}>
              <div className="name__email">
                <div className="name">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="textarea">
              <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
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
