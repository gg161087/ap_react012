import { Section } from './components/Section/Section.jsx'

import './App.css'

function App() {
    
    const productos = [
        {
            "id":"MLA819328068",
            "title": "Motorola G6 Plus 64GB",
            "price": 28599,
            "condition": "new",
            "free_shipping" : true,
            "thumbnail": "http://mla-s1-p.mlstatic.com/909111-MLA312" 
        }, 
        {
            "id":"MLA819328069",
            "title": "Motorola G7 Plus 64GB",
            "price": 28599,
            "condition": "new",
            "free_shipping" : false,
            "thumbnail": "http://mla-s1-p.mlstatic.com/909111-MLA312" 
        }
    ]

    return (
        <>
            <Section productos={productos}></Section>      
        </>
    )
}

export default App