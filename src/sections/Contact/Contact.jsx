import React, { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Using SMTP.js
    window.Email.send({
      SecureToken: 'YOUR_SMTP_SECURE_TOKEN', // Replace with your Secure Token
      To: 'your_email@example.com', // Replace with the recipient's email
      From: formData.email, // The sender's email
      Subject: `Contact Form Submission from ${formData.name}`,
      Body: `
        Name: ${formData.name}<br/>
        Email: ${formData.email}<br/>
        Message: ${formData.message}<br/>
      `,
    })
      .then((message) => {
        if (message === 'OK') {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('Failed to send message. Please try again later.');
          console.error('Email sending failed:', message);
        }
      })
      .catch((error) => {
        setStatus('Failed to send message. Please try again later.');
        console.error('Error:', error);
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      {status && <p className="statusMessage">{status}</p>}
    </section>
  );
}

export default Contact;
