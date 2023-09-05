import React from 'react'
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <div className={styles.container}>

      <div className={styles.social}>
        <Image src="/facebook.png" alt='' width={24} height={24}/>
        <Image src="/instagram.png" alt='' width={24} height={24}/>
        <Image src="/tiktok.png" alt='' width={24} height={24}/>
        <Image src="/youtube.png" alt='' width={24} height={24}/>
      </div>

      <div className={styles.logo}>
        <div className={styles.links}>
          <ThemeToggle />
          <Link href="/" className='link'>Homepage</Link>
          <Link href="/" className='link'>Contact</Link>
          <Link href="/" className='link'>About</Link>
          <AuthLinks />
        </div>
      </div>
      
    </div>
  )
}

export default Navbar;
