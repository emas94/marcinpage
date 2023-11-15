import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItem}>
        <div className={styles.companyInfo}>
          <h1>Industrie</h1>
          <p>Opis firmy i jej działalności CArewwwwwplplplpl.</p>
          <ul className={styles.contactInfo}>
            <li>
              <i className={`${styles.icon} fas fa-phone`}></i> Telefon:{" "}
              <span>+48 123 456 789</span>
            </li>
            <li>
              <i className={`${styles.icon} fas fa-envelope`}></i> E-mail:{" "}
              <a href="mailto:info@example.com">info@example.com</a>
            </li>
            <li>
              <i className={`${styles.icon} fas fa-map-marker`}></i> Adres:{" "}
              <span>Ulica 123, Miasto</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerItem}>
        <div className={styles.logo} />
      </div>
    </div>
  );
};

export default Footer;
