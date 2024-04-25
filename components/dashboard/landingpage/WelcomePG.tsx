import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import mandap from '/public/mandap.png'

const WelcomePG = () => {
  return (
    <div className={styles.main}>
      <header>
        <h1>WELCOME TO BILLIONAIRES BRIDEMAID</h1>
      </header>
      <div className={styles.detail}>
        <div className={styles.info}>
          <section>
          <h2>
          Enter the world of Billionaire Bride, where love meets 
          luxury in a fusion of Bigg Boss drama and Splitsvilla 
          romance. Get ready for an exhilarating journey filled with
          challenges, emotions, and unexpected twists.
          </h2>
          </section>
          <div>
          <h1>Key Features</h1>
          <ul>
            <li>Luxurious Mansion Setting</li>
            <li>Tasks Inspired by Bigg Boss and Splitsvilla</li>
            <li>Emotional Moments and Unexpected Twists</li>
            <li>Involvement of Contestants' Parents</li>
            <li>Audience Engagement Through Voting</li>
          </ul>
          </div>
          <button>Learn More</button>
        </div>
        <div className={styles.man}>
          <Image src={mandap} alt='mandap'/>
        </div>
      </div>
    </div>
  )
}

export default WelcomePG