import { useContext } from "react"
import styles from '../styles/styles.module.css'
import { context } from "./ProductCard"


export interface ButtonProps {
  className?: string
}

export const ProductButton = ( { className }: ButtonProps ) => {
  const { incremet, count } = useContext( context )
  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus}
        onClick={() => incremet( -1 )}>-</button>
      <div className={styles.countLabel}>
        {count}
      </div>
      <button className={styles.buttonAdd}
        onClick={() => incremet( +1 )}>+</button>
    </div>
  )
}