import styles from '../styles/styles.module.css'
import { useButton } from '../hooks/useButton';
import React, { createContext } from 'react';
import { ProductsProps, CardProps } from '../interfaces/interfaces';

export const context = createContext( {} as ProductsProps )

export const ProductCard = ( { children, product }: CardProps ) => {
  const { first, incremet } = useButton()
  return (
    <context.Provider value={{ first, incremet, product }}>
      <div className={styles.productCard}>
        {children}
      </div>
    </context.Provider>
  )
}

