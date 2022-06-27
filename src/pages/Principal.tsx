import ProductCard from "../components"
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButton } from '../components/ProductButton';

const product = {
    id: '1',
    title: 'coffe',
    img: './coffee.png'
}

export const Principal = () => {
    return (
        <div style={{display: 'flex', gap: '10px'}}>
            <ProductCard product={product}>
                <ProductCard.Img/>
                <ProductCard.Title title='example one' />
                <ProductCard.Button/>
            </ProductCard>
            <ProductCard product={product}>
                <ProductImage/>
                <ProductTitle title='example two' />
                <ProductButton/>
            </ProductCard>
        </div>
    )
}
