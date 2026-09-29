import Navbar from '../../components/Navbar';
import styles from './page.module.css';
import pageStyles from '../page.module.css';
import Cards from './Cards';

export default function Pricing() {
  return (
    <div className={pageStyles.container}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>Software that grows with your business</h1>
          <p className={styles.subtitle}>A simple plan that scales as your business does</p>
          <a href="#plans" className={styles.arrowLink}>
            See plans and features
            <span className={styles.arrow}>↓</span>
          </a>
        </div>

        <Cards />
      </main>
    </div>
  );
}
