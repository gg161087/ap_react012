import {useEffect, useState} from 'react';

export const FetchLocal = () => {

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

    useEffect(() =>{
        const cargarDatos = async () => {
            const response = await fetch('JSON/paises.json')
            const data = await response.json()
            setPaises(data)            
        }         
        cargarDatos()      
    },[]) //

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
        </>
    )
}