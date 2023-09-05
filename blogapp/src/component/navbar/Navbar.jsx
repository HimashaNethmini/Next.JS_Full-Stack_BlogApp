import React from 'react'
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
          <Link href="/" className='link'>Homepage</Link>
          <Link href="/" className='link'>Contact</Link>
          <Link href="/" className='link'>About</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar;
