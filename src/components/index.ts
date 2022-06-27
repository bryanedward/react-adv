import { ProductCard as Card  } from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButton } from './ProductButton';
import { ProductCardProps } from '../interfaces/interfaces';

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButton } from './ProductButton';

export const ProductCard : ProductCardProps = Object.assign(Card, {
    Title: ProductTitle,
    Img: ProductImage,
    Button: ProductButton
})

export default ProductCard 