import { Box } from '@chakra-ui/react';

import { Card } from '../Card/Card.jsx'

export const Section = ({productos}) => {

    return (
        <Box display='flex' gap='2rem'>
            {productos.map(producto => <Card key={producto.id}
                    title={producto.title}
                    price={producto.price}
                    condition={producto.condition}
                    shipping={producto.free_shipping}
                    thumbnail={producto.thumbnail}   
                ></Card>)}
        </Box>
    )
}