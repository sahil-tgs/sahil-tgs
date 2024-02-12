// pages/index.js

import Head from 'next/head';
import indexStyles from '../styles/index.module.css'; // Import the CSS module

const Home = () => {
  return (
    <div className={indexStyles.container}>
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Your description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={indexStyles.mainContent}>
        <h1 className={indexStyles.title}>Your Name</h1>
        <p className={indexStyles.subtitle}>Frontend Developer</p>
        <p className={indexStyles.description}>Crafting digital experiences</p>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
};

export default Home;
