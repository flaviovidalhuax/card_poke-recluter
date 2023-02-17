import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'
import axios from 'axios'
import FormPoke from './components/FormPoke'
import RandomPoke from './components/RandomPoke'






function App() {
  const poke= useSelector(state=> state.pokeslice)
  const namePokemon=useSelector(state=> state.namePoke) //read
  
  const [satepoke, setSatepoke] = useState()
  const [namePoke, setNamePoke] = useState()  
  const BaseUrl='https://pokeapi.co/api/v2/pokemon'
  let URL=''
  console.log(namePoke);
  useEffect(() => {

       URL=`https://pokeapi.co/api/v2/pokemon/${namePoke}`

  axios.get(URL)
      .then(res => setSatepoke(res.data))
      .catch(err=> console.log(err)) 
 }, [namePoke])
 
 let url1=''
 useEffect(() => {
  url1=`https://pokeapi.co/api/v2/pokemon/${namePokemon}`
  axios.get(url1)
      .then(res => setSatepoke(res.data))
      .catch(err=> console.log(err)) 
}, [namePokemon])
//console.log(satepoke)
  return (
    <div className="card bg-info card_center" 
    style={{width: "25rem"}} >
      <div className='card-body'>

          <RandomPoke /> 
      </div>
    <article className='card bg-info card_continer'>
        <div >
            <h3 className='card-title'> <span>Pokemon name: </span>{satepoke?.name}</h3>
            <lu>
                <li><span>wieihgt: </span>{satepoke?.weight}</li>
                {satepoke?.abilities.map(num=> 
                  <li><span>hability: </span> {num.ability.name}</li>
                  )}
   
            </lu>
        </div>
        <section className='section2 card' style={{width: "7rem"}}>
            <div className='cardM'>
                  <img src={satepoke?.sprites.other.dream_world.front_default
                  } alt="picture" class="card-img-top"/>
            </div>
            <div className='cardM'>
                  <img src={satepoke?.sprites.other['official-artwork'].front_default
                  } alt="picture" class="card-img-top"/>
            </div>
            <div className='cardM'>
                  <img src={satepoke?.sprites.other['official-artwork'].front_shiny
                  } alt="picture" class="card-img-top"/>
            </div>
            
        </section>
    </article>
     
    </div>
  )
}

export default App
