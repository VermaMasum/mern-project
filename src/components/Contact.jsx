// src/components/Contact.jsx
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, feel free to reach out
          to us!
        </p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>
            <strong>Email:</strong> support@grasshawk.com
          </p>
          <p>
            <strong>Phone:</strong> +91-1234567789
          </p>
          <p>
            <strong>Address:</strong> xyz , Gujarat, India
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
