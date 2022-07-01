import ProductCard from "../components"
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButton } from '../components/ProductButton';
import '../styles/custom.styled.css'
import { Products } from '../interfaces/interfaces';
import { useState } from 'react';

const product1 = {
    id: '1',
    title: 'coffe',
    img: './coffee.png'
}

const product2 = {
    id: '2',
    title: 'coffe',
    img: './coffee2.png'
}

const product: Products[] = [product1, product2]


interface ProductIntCart extends Products {
    counter: number
}

export const Principal = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductIntCart }>( {} )
    const onProductCountChange = ( { counter, product }: { counter: number, product: Products } ) => {
        setShoppingCart( old => {
            if ( counter === 0 ) {
                const { [product.id]: item, ...rest } = old
                return rest
            }

            return {
                ...old,
                [product.id]: { ...product, counter }
            }
        } )
    }
    return (
        <div>
            <h2>Shopping</h2>
            <hr />
            <div className="container">
                <div className="cards">
                    {
                        product.map( item => (
                            <ProductCard key={item.id} product={item} className="dark"
                                onChange={onProductCountChange}>
                                <ProductImage img={item.img} />
                                <ProductTitle title={item.title} className="title" />
                                <ProductButton />
                            </ProductCard>
                        ) )
                    }

                </div>
                <div className="shopping_cart">
                    <ProductCard product={product2} className="" style={{ width: '100px' }}>
                        <ProductImage />
                        <ProductTitle title="itme" />
                        <ProductButton />
                    </ProductCard>
                </div>

            </div>
            <code>
                {JSON.stringify( shoppingCart )}
            </code>
        </div>
    )
}
