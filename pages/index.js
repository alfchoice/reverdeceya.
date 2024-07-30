import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reverdece Ya!</title>
        <meta name="description" content="Reverdece Ya! es una plataforma de observatorio y cuidado medioambiental popular." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a Reverdece Ya!
        </h1>

        <p className={styles.description}>
          Focus on the data that's most important. Gain control of your data with real-time observations, filtering, enrichment, and orchestration.
        </p>

        <div className={styles.grid}>
          <a href="#ease-of-use" className={styles.card}>
            <h2>Ease of use &rarr;</h2>
            <p>Find in-depth information about Reverdece Ya! features and how to use them.</p>
          </a>

          <a href="#flexible-deployment" className={styles.card}>
            <h2>Flexible deployment &rarr;</h2>
            <p>Learn how to deploy Reverdece Ya! in various environments.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.reverdeceya.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/images/logo.png" alt="Reverdece Ya! Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
