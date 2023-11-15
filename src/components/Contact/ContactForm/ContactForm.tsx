// ContactForm.tsx
import React, { useState } from "react";
import styles from "./Styles.module.scss";
import classNames from "classnames";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.heading}>Skontaktuj się z nami:</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Imie i nazwisko:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Telefon:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>
        <div className={classNames(styles.formGroup, styles.message)}>
          <label htmlFor="message" className={styles.label}>
            Wiadomość:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.input}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.button}>
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
