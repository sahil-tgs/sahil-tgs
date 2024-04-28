'use client';

import { Container, Title, Text, Image } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons-react';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>.tgs</div>
        <div className={styles.navbarLinks}>
          <Link href="/projects" className={styles.navbarLink}>Projects</Link>
          <Link href="/resume" className={styles.navbarLink}>Resume</Link>
          <Link href="/contact" className={styles.navbarLink}>Contact</Link>
        </div>
      </nav>
      <Title className={styles.title}>Hello World!</Title>
      <Text className={styles.text}>
        I'm Sahil Mandi, a software engineer based in Nagpur, India, and also an Electronics and
        Communication Engineering student. I enjoy creating things that live on the internet, whether
        that be websites, applications, or anything in between. I have been freelancing for a year now
        while studying at the university, and I've managed to gain a decent amount of experience and
        valuable knowledge from various fields throughout my projects/work.
      </Text>
      <div className={styles.image}>
        <Image src="/image.jpeg" alt="Profile Picture" width={200} height={200} radius="50%" />
      </div>
    </div>
  );
}