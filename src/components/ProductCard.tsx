import styles from '../styles/styles.module.css'

import { useButton } from '../hooks/useButton';
import React, { createContext } from 'react';
import { ProductsProps, Products, oncChangeArgs } from '../interfaces/interfaces';


export interface CardProps {
  product: Products,
  children?: React.ReactElement[] | React.ReactElement
  className?: string
  style?: React.CSSProperties
  onChange?: ( Props: oncChangeArgs ) => void
}

export const context = createContext( {} as ProductsProps )

export const ProductCard = ( { children, product, className, style, onChange }: CardProps ) => {
  // compount component pattern
  const { count, incremet } = useButton( {onChange, product} )
  return (
    <context.Provider value={{ count, incremet, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </context.Provider>
  )
}

