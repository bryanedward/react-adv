import styles from '../styles/styles.module.css'
import { useButton } from '../hooks/useButton';
import React, { createContext } from 'react';
import { ProductsProps, Products } from '../interfaces/interfaces';


export interface CardProps {
  product: Products,
  children?: React.ReactElement[] | React.ReactElement
  className?: string
  style?: React.CSSProperties
}

export const context = createContext( {} as ProductsProps )

export const ProductCard = ( { children, product, className, style }: CardProps ) => {
  // compount component pattern
  const { first, incremet } = useButton()
  return (
    <context.Provider value={{ first, incremet, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </context.Provider>
  )
}

