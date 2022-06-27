import { createContext, useContext } from "react"
import { ProductsProps } from "../interfaces/interfaces"
import styles from '../styles/styles.module.css'

const context = createContext( {} as ProductsProps )


export const ProductTitle = ( { title = '' } ) => {
    const {product} = useContext(context)
  
    return (
      <span className={styles.productDescription} >{title ? title : product.title}</span>
    )
  }