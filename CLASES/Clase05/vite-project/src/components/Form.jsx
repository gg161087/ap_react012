import { useState } from 'react'
import { VStack, Container, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'

export const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [direccion, setDireccion] = useState('')
    const [showValues, setShowValues] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const updateName = (e) => {
        setName(e.target.value)    
    }
    const updateEmail = (e) => {
        setEmail(e.target.value)
        
    }
    const updateDiraccion = (e) => {   
        setDireccion(e.target.value)     
    }

    const sendDates = (e) => {
        e.preventDefault()
        setShowValues(true)
    }
    const updateState = (e) => {
        e.preventDefault()
        setPassword(!showPassword)
    }

    return (
        <VStack>
            <Container>
                <FormControl>
                    <FormLabel>Nombre:</FormLabel>
                    <Input type='text' placeholder='Ingrese su nombre' onChange={updateName} value={name}/>              
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' placeholder='Ingrese su email' onChange={updateEmail} value={email}/>
                    <FormLabel>Dirección</FormLabel>
                    <Input type='text' placeholder='Ingrese su dirección' onChange={updateDiraccion} value={direccion}/>
                    <Button colorScheme='blue'  m='1rem' onClick={sendDates} type='submit'>Enviar</Button>                     
                </FormControl>
            </Container>
            {showValues && <Container>
                <h2>Tus datos son</h2>
                <p><strong>Nombre:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Dirección:</strong>{direccion}</p>
            </Container>}
        </VStack>
    )
}