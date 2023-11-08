import './App.css';
import { About } from './Components/About/About';

export const App = () => {

    const name = 'Gonzalo';

    const user = {
        name:'Gonzalo',
        lastName: 'Gonzalez',
        age: 36,
        img: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png',
        likeCss: false
    }

    const hizoClick = () => {        
        console.log('Hizo click');        
    }

    return (
        <main>
            <h2>Cuerpo de la pagina</h2>
            <p>{name}</p>
            <button onClick={hizoClick}>Hace Click</button>
            <button onClick={() => console.log('Hizo click 2')}>Hace click 2</button>
            <About user={user}></About>
        </main>
    );
}