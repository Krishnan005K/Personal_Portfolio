import React, { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Sending the form data to Formspree
    try {
      const response = await fetch('https://formspree.io/f/xovvpjay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setStatus('You will get a reply shortly.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <div className={styles.contactDetails}>
          <p><strong>Phone:</strong> +91-9361250297</p>
          <p><strong>Email:</strong> krishnankaliyappan2005@gmail.com</p>
        </div>
        <br /><br />
        <form onSubmit={handleSubmit}>
          <p><strong>Send me a message:</strong></p>
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
        <br />
        {status && <p className="statusMessage">{status}</p>}
      </section>
    </div>
  );
}

export default Contact;
