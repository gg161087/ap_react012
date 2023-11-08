import './About.css';

export const About = ({user}) => {
    return (
        <div className="card">
            <img className="card-img-top" src={user.img} alt={`Foto de ${user.name}`}/>
            <div className="card-body">
                <p className="card-text">Nombre: {user.name}</p>
                <p className="card-text">Apellido: {user.lastName}</p>
                <p className="card-text">Edad: {user.age}</p>
                <p className="card-text">Te gusta css: {user.likeCss ? 'Si' : 'No'}</p>
            </div>
        </div>
    )
}