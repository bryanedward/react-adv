import { useState } from 'react'

export const useButton = () => {
    const [first, setfirst] = useState( 0 )

    const incremet = ( value: number ) => {
        setfirst( prev => Math.max( prev + value, 0 ) )
    }

    return {
        first,
        incremet
    }
}
