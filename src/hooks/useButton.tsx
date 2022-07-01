import { useState } from 'react'
import { Products, oncChangeArgs } from '../interfaces/interfaces';


interface useProductsArgsProps{
    product: Products
    onChange?: (args: oncChangeArgs) => void
}

export const useButton = ( {onChange, product} : useProductsArgsProps ) => {
    const [count, setCount] = useState( 0 )

    const incremet = ( value: number ) => {
        const newValue = Math.max(count + value, 0)
        setCount( count => Math.max( count + value, 0 ) )
        // guarda la cantida de productos y los datos del registro
        onChange && onChange({counter: newValue, product})
    }

    return {
        count,
        incremet
    }
}
