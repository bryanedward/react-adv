import { createContext, useContext } from "react"
import { ProductsProps } from "../interfaces/interfaces"
import styles from '../styles/styles.module.css'

const context = createContext( {} as ProductsProps )

export interface ProductTtitleProps {
  title?: string;
  className?: string
}

export const ProductTitle = ( { title, className }: ProductTtitleProps ) => {
  const { product } = useContext( context )

  return (
    <span className={`${styles.productDescription} ${className}`} >{title ? title : product.title}</span>
  )
}