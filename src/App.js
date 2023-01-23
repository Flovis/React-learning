import { useState } from "react";

function App(){
    //state
const [voitures, setVoitures] = useState([
    {id:1, nom:'tesla'},
    {id:1, nom:'odi'},
    {id:3, nom:'toyata'},
    {id:1, nom:'bmw'},

]);

//fonction


//render
return (
    <div>
        <h1>Voiture</h1>
        <ul>
            {voitures.map((fruit) =>{
                if(fruit.id === 1)
                    return <li>{fruit.nom} </li>
            })}
        </ul>
    </div>
);
// render
}

export default App; 

