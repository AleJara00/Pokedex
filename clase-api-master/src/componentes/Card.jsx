import React, { useEffect, useState } from 'react';
import '../css/estilos.css'

function Card(props){

const [pokemon,setPokemon]=useState({});
const [isLoading,setIsLoading]=useState(true);
    const url='https://pokeapi.co/api/v2/pokemon/4'
    const fethApi=async()=>{
        const response=await fetch(props.url)
        const json=await response.json()
        setPokemon({
            name: json.name,
            type: json.types[0].type.name,
            imageUrl: json.sprites.front_default,
          });

    }

    useEffect(()=>{
        (async()=>{
            await fethApi()
            setIsLoading(false)
        })()

    },[] );

if(isLoading){
    return(
        <div>Cargando.....</div>
    )
}

return(
<div className='contenedorTexto'>
    <img className='contenedorImagen' src={pokemon.imageUrl} alt='imagen'/> 
    <h5 className='contenedorTitulo'> {pokemon.name}</h5>
    <p className='contenedorParrafo'>{pokemon.type}</p>
</div>

);
}
export default Card;