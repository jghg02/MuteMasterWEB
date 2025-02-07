import Head from 'next/head';
import styles from '../styles/Home.module.css';

// Reusable TimelineItem Component
const TimelineItem = ({ title, description, image, alt, reverse }) => (
  <div className={`${styles.timelineItem} ${reverse ? styles.reverse : ''}`}>
    <div className={styles.timelineMedia}>
      <img src={image} alt={alt} />
    </div>
    <div className={styles.timelineContent}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default function Home() {
  const timelineData = [
    {
      title: 'Feature 1: List Audible Tabs',
      description: 'View all tabs that are currently playing audio in your browser.',
      image: '/images/list-audible-tabs.png',
      alt: 'List Audible Tabs',
    },
    {
      title: 'Feature 2: Mute/Unmute Tabs',
      description: 'Mute or unmute each tab independently with a single click.',
      image: '/images/mute-unmute-tabs.png',
      alt: 'Mute/Unmute Tabs',
    },
    {
      title: 'Feature 3: User-Friendly Interface',
      description: 'Enjoy a simple and intuitive interface for managing your tabs.',
      image: '/images/user-friendly-interface.png',
      alt: 'User-Friendly Interface',
    },
    {
      title: 'Feature 4: Lightweight',
      description: "Experience a lightweight extension that won't slow down your browser.",
      image: '/images/lightweight.png',
      alt: 'Lightweight',
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Mute Master Safari Extension</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Welcome to Mute Master Safari Extension!</h1>
        <p className={styles.description}>Control your browser's audio with ease.</p>

        <div className={styles.timeline}>
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              alt={item.alt}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </main>

      <footer>
        
      </footer>
    </div>
  );
}