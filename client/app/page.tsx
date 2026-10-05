import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navBar/Navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h2 className={styles.heroSubtitle}>pamperMe Software</h2>
          <h1 className={styles.heroTitle}>
            An All-In-One Booking App.<br />
            Built for you, built for your business.
          </h1>

          <div className={styles.heroActions}>
            <button className="btn-primary">Start free trial</button>
            <button className="btn-secondary">Book a demo</button>
          </div>

          <div className={styles.heroImageContainer}>
            <Image
              src="/dashboard_mockup.jpg"
              alt="PamperMe Dashboard"
              width={1000}
              height={600}
              className={styles.heroImage}
              priority
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <h2 className={styles.statsTitle}>Built for everyone, from solopreneurs to enterprise.</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={`${styles.statValue} ${styles.red}`}>300K</div>
              <div className={styles.statLabel}>professionals trust us</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>162M+</div>
              <div className={styles.statLabel}>appointments booked in 2023</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>17 years</div>
              <div className={styles.statLabel}>of innovation</div>
            </div>
            <div className={styles.statItem}>
              <div className={`${styles.statValue} ${styles.teal}`}>99.9%</div>
              <div className={styles.statLabel}>uptime</div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className={styles.industriesSection}>
          <h2 className={styles.industriesTitle}>What&apos;s your industry?</h2>

          <div className={styles.industriesGrid}>
            {/* Beauty */}
            <div className={styles.industryCard}>
              <Image
                src="/beauty.jpg"
                alt="Beauty Industry"
                fill
                style={{ objectFit: 'cover' }}
                className={styles.industryImage}
              />
              <div className={`${styles.industryOverlay} ${styles.industryOverlayBeauty}`}></div>
              <div className={styles.industryContent}>
                <h3 className={styles.industryName}>Beauty <span style={{ fontWeight: 300 }}>›</span></h3>
              </div>
              <div className={styles.industryTags}>
                <span className={styles.industryTag}>Hair Salon</span>
                <span className={styles.industryTag}>Barbershop</span>
                <span className={styles.industryTag}>Nail Salon</span>
              </div>
            </div>

            {/* Wellness */}
            <div className={styles.industryCard}>
              <Image
                src="/wellness.jpg"
                alt="Wellness Industry"
                fill
                style={{ objectFit: 'cover' }}
                className={styles.industryImage}
              />
              <div className={`${styles.industryOverlay} ${styles.industryOverlayWellness}`}></div>
              <div className={styles.industryContent}>
                <h3 className={styles.industryName}>Wellness <span style={{ fontWeight: 300 }}>›</span></h3>
              </div>
              <div className={styles.industryTags}>
                <span className={styles.industryTag}>Spa</span>
                <span className={styles.industryTag}>Massage</span>
                <span className={styles.industryTag}>Med Spa</span>
              </div>
            </div>

            {/* Fitness */}
            <div className={styles.industryCard}>
              <Image
                src="/fitness.jpg"
                alt="Fitness Industry"
                fill
                style={{ objectFit: 'cover' }}
                className={styles.industryImage}
              />
              <div className={`${styles.industryOverlay} ${styles.industryOverlayFitness}`}></div>
              <div className={styles.industryContent}>
                <h3 className={styles.industryName}>Fitness <span style={{ fontWeight: 300 }}>›</span></h3>
              </div>
              <div className={styles.industryTags}>
                <span className={styles.industryTag}>Gym</span>
                <span className={styles.industryTag}>Yoga Studio</span>
                <span className={styles.industryTag}>Personal Trainer</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
