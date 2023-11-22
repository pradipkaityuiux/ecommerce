import React from 'react'
import styles from "./Hero.module.css"
import handIcon from "../Assets/hand_icon.png"
import heroImage from "../Assets/hero_image.png"

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.hero}>
            <div className={styles.heroTitle}>
                <p>New Arriavals Only</p>
                <h1>New <img src={handIcon} alt="handIcon" /> Collections <br /> For Everybody</h1>
                <button>Latest Collections</button>
            </div>
            <div className={styles.imageContainer}><img src={heroImage} alt="" /></div>
        </div>
    </div>
  )
}
