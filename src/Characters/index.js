import React from 'react'
import Character from './Character'

const Characters = (props) =>(
    <ul className="content-card">

    
        {
            props.character.map((prod,i)=>(
               <Character
               key={i}
               name={prod.name}
               id={prod.id}
               status={prod.status}
               created={prod.created}
               image={prod.image}
               species={prod.species}
               gender={prod.gender}
               origin={prod.origin.name}
               location={prod.location.name}
               episode={prod.episode}
               />                
            ))
        }
    </ul>
)
export default Characters