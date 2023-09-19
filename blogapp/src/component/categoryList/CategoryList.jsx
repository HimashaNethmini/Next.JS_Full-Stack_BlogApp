import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories </h1>

      {/* having diifferent links */}
      <div className={styles.categories}>

      {/* style */}
        <Link href = "/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/style.png" 
          alt="" 
          width={35} 
          height={35} 
          className={styles.image} />
          Styles
        </Link>

         {/* fashion */}
         <Link href = {`/blog`} className={`${styles.category} ${styles.fashion}`}>
          <Image src="/fashion.png" 
          alt="" 
          width={35} 
          height={35} 
          className={styles.image} />
          Fashion
        </Link>

         {/* food */}
         <Link href = {`/blog`}className={`${styles.category} ${styles.food}`}>
          <Image src="/food.png" 
          alt="" 
          width={35} 
          height={35} 
          className={styles.image} />
          Food
        </Link>

         {/* travel */}
         <Link href = {`/blog`} className={`${styles.category} ${styles.travel}`}>
          <Image src="/travel.png" 
          alt="" 
          width={35} 
          height={35} 
          className={styles.image} />
          Travel
        </Link>

         {/* culture */}
         <Link href = {`/blog`} className={`${styles.category} ${styles.culture}`}>
          <Image src="/culture.png" 
          alt="" 
          width={35} 
          height={35} 
          className={styles.image} />
          Culture
        </Link>

         {/* coding */}
         <Link href = {`/blog`} className={`${styles.category} ${styles.coding}`}>
          <Image src="/coding.png" 
          alt="" 
          width={35} 
          height={35} 
          className={styles.image} />
          Coding
        </Link>
      </div>

    </div>
  )
}

export default CategoryList
