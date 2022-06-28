import ProductCard from "../components"
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButton } from '../components/ProductButton';
import styles from  '../styles/custom.module.css'

const product = {
    id: '1',
    title: 'coffe',
    img: './coffee.png'
}


export const Principal = () => {

    return (
        <div style={{display: 'flex', gap: '10px'}}>
            <ProductCard product={product} style={{
                backgroundColor: 'pink'
            }}>
                <ProductCard.Img activeImg="active"/>
                <ProductCard.Title title='example one' />
                <ProductCard.Button className={styles.customs_buttons}/>
            </ProductCard>
            <ProductCard product={product} className={styles.dark}>
                <ProductImage/>
                <ProductTitle title='example two' className={styles.title}/>
                <ProductButton/>
            </ProductCard>
        </div>
    )
}
