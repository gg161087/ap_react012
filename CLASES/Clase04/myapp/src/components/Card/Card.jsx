import { Box, Text } from '@chakra-ui/react';

import { useState } from 'react';


export const Card = ({thumbnail,title,price,condition,shipping}) => {

    const [contador, setContador] = useState(1)


    const incrementar = () => {
        if (contador<10) {
            setContador(contador+1)
        }
    }
    const decrementar = () => {
        setContador(contador-1)
    }

    return (
        <Box bg='green' borderRadius='0.4rem' padding='1rem'>            
            <img src={thumbnail} alt="" />
            <div className="product-details">
                <h6>{title}</h6>
                <Text ><span>Precio: {price}</span></Text>
                <Text><span>Condicion: {condition}</span></Text>
                {shipping && <Text><span>Envio gratis</span></Text>}
            </div>
            <Box>
                <p>{contador}</p>
                <button onClick={incrementar} disabled={contador==10? "disable": ""}>Sumar</button>
                <button onClick={decrementar}>Restar</button>
            </Box>
        </Box>
    )
}