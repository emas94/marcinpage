import styles from "./Navigation.module.scss";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li>
          <Link href="/">O nas</Link>
        </li>
        <li>
          <Link href="/#oferta">Oferta</Link>
        </li>
        <li>
          <Link href="/contact">Kontakt</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
