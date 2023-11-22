import {useEffect, useState} from 'react';
import axios from 'axios';

export const AxiosApi = () => {

    const [personajes, setPersonajes] = useState([])
    const [page, setPage] = useState(1)

    const siguiente = () => {
        setPage(page + 1)
    }
    const anterior = () => {        
        page >= 2 && setPage(page - 1)      
    }

    useEffect(() =>{      
        const cargarPersonajes = async () => {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            setPersonajes(response.data.results)
        }
        cargarPersonajes()
             
    },[page]) //

    return (
        <>            
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