import { useState } from 'react'
import { VStack, Container, FormControl, FormLabel, Input, Button, Box, Text } from '@chakra-ui/react'

export const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [direccion, setDireccion] = useState('')
    const [showValues, setShowValues] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const [checkName, setCheckName] = useState(false)
    const [checkDireccion, setCheckDireccion] = useState(false)
    const [checkEmail, setCheckEmail] = useState(false)
    const [checkPassword, setCheckPassword] = useState(false)
   

    const updateName = (e) => {
        setName(e.target.value)
        setCheckName(e.target.value.length >= 3)  
    }
    const updateEmail = (e) => {
        ///^\S+@\S+\.\S+$/
        setEmail(e.target.value)
        setCheckEmail(/^\S+@\S+\.\S+$/.test(e.target.value))
    }
    const updatePassword = (e) => {
        setPassword(e.target.value)
        setCheckPassword(e.target.value.length >= 8)  
    }
    const updateDiraccion = (e) => {   
        setDireccion(e.target.value)
        setCheckDireccion(e.target.value.length > 3)     
    }

    const sendDates = (e) => {
        e.preventDefault()
        setShowValues(true)
    }
    const updateState = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    return (
        <VStack>
            <Container>
                <FormControl>
                    <FormLabel>Nombre:</FormLabel>
                    <Input type='text' placeholder='Ingrese su nombre' onChange={updateName} value={name}/>
                    {(!checkName) && <Text>
                        Nombre no valido
                    </Text>}              
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' placeholder='Ingrese su email' onChange={updateEmail} value={email}/>
                    {(!checkEmail) && <Text>
                        Email no valido
                    </Text>} 
                    <FormLabel>Dirección</FormLabel>
                    <Input type='text' placeholder='Ingrese su dirección' onChange={updateDiraccion} value={direccion}/>
                    {(!checkDireccion) && <Text>
                        Direccion no valida
                    </Text>} 
                    <Box>
                        <FormLabel>Password:</FormLabel>
                        <Input type={showPassword ? 'text' : 'password'} placeholder='ingrese su contraseña' onChange={updatePassword} value={password}/>
                        {(!checkPassword) && <Text>
                            Password no valida
                        </Text>} 
                        <Button colorScheme='blue'  m='1rem' onClick={updateState}>show password</Button>
                    </Box>
                    <Button colorScheme='blue'  m='1rem' onClick={sendDates} type='submit'>Enviar</Button>                     
                </FormControl>
            </Container>
            {showValues && <Container>
                <h2>Tus datos son</h2>
                <p><strong>Nombre:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Dirección:</strong> {direccion}</p>
            </Container>}
        </VStack>
    )
}