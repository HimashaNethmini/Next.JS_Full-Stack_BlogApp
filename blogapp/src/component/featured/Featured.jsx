import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Discover stories and creative ideas with Creative Writers Today </b>
      </h1>

      <div className={styles.post}>
        {/*image */}
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill/>
        </div>

        {/*text */}
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}> Tranquil Beautiful Yellow Valley in Australia</h1>

          <p className={styles.postDesc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <button className={styles.button}>Read More</button>


        </div> 
        
      </div>
      
    </div>
  )
}

export default Featured
