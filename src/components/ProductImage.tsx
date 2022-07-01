import { useContext } from 'react'
import noimagen from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
import { context } from './ProductCard';


export interface ProductImgProps {
    img?: string
    activeImg?: string
}


export const ProductImage = ( { img }: ProductImgProps ) => {
    const { product } = useContext( context )
    let imgProduct: string
    if ( img ) {
        imgProduct = img
    } else if ( product.img ) {
        imgProduct = product.img
    } else {
        imgProduct = noimagen
    }
    return (
        <img className={styles.productImg} src={imgProduct} />
    )
}

