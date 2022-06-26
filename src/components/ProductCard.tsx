import React, { useState } from 'react'
import styles from '../styles/styles.module.css'

export const ProductCard = () => {

  const [first, setfirst] = useState(0)

  const incremet = (value : number) => {
    setfirst(prev => Math.max(prev + value , 0))
  }

  return (
    <div>
       <div className={styles.productCard}>
      <img  className={styles.productImg} src="./coffee.png" alt="coffe png" />
      <span className={styles.productDescription} >coffe mug</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus}
        onClick={() => incremet(-1)}>-</button>    
        <div className={styles.countLabel}>
          {first}
        </div>
        <button className={styles.buttonAdd}
        onClick={() => incremet(+1)}>+</button>
      </div>
    </div>
    </div>
  )
}
