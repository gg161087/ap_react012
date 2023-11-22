import {useEffect, useState} from 'react';
import axios from 'axios';

export const Intro = () => {

    /* console.log('Hola'); */
   /*  useEffect(() =>{
        console.log('soy el useEffect')
    },[]) */
    //Hay 3 tipos de dependencias:
    //1 - no agregamos nada sin dependecias entonces seimpre se va a renderizar
    //2 - [], le estamos diciendo que se renderiza 1 sola vez
    //3 - [variable] que se renderiza cuando el valor se la variable cambia
    /* console.log('adios') */

    const [paises, setPaises] = useState([])
    const [busqueda, setBusqueda] = useState('')

    const [personajes, setPersonajes] = useState([])
    const [page, setPage] = useState(1)

    const siguiente = () => {
        setPage(page + 1)
    }
    const anterior = () => {        
        page >= 2 && setPage(page - 1)      
    }

    useEffect(() =>{
        const cargarDatos = async () => {
            const response = await fetch('JSON/paises.json')
            const data = await response.json()
            setPaises(data)            
        }
        const cargarPersonajes = async () => {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            setPersonajes(response.data.results)
        }
        cargarPersonajes()
        cargarDatos()      
    },[page]) //

    //.find encuntra el primero que cumpla X condicion
    //.filter para buscar varios de coincidencia

    const paisesFiltrados = paises.filter((pais => pais.name.toLowerCase().includes(busqueda.toLowerCase())))
    
    const buscarPais = (e) => {
        setBusqueda(e.target.value)
        console.log(e.target.value);
    }

    return (
        <>
            <input type="text" placeholder='busca un pais...' onChange={buscarPais} value={busqueda}/>
            <div>
                {paisesFiltrados.map((element) =>(
                    <p key={element.id}>{element.name}</p>
                ))}
            </div>
            <br />
            <button onClick={anterior}>Anterior</button>
            <button onClick={siguiente}>Siguiente</button>
            <div>
                {
                    personajes.map((personaje) => (
                        <p key={personaje.id}>{personaje.name} </p>
                    ))
                    
                }
            </div>
        </>
    )
}