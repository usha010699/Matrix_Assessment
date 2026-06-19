import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var res = fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    console.log("res",res)
    console.log("Form Data:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact-section">

      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Let’s build something efficient together
      </p>

      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h3 style={{
            textAlign: "center",
            color: "aquamarine",
            fontFamily: "verdana",
            fontSize: "30px"
          }}>Get in Touch</h3>
          <p>📍 Chennai, India</p>
          <p>📧 support@matrixindustries.com</p>
          <p>📞 +91 98765 43210</p>

          <div style={{ "textAlign": "center" }} className="contact-note">
            We usually respond within 24 hours.
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>

        </form>

      </div>

    </section>
  );
};

export default Contact;