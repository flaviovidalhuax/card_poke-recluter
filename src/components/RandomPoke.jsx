import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPokeSlice } from '../store/slice/poke.slice'
import {setNameSlice} from '../store/slice/namePoke.slice'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/RandomPoke.css'

const RandomPoke = () => {
    //!gloval number
    const dispatch=useDispatch()    //write
    const numberID=useSelector(state=> state.pokeslice) //read
    //?global name
    const namePokemon=useSelector(state=> state.namePoke) 

const [setstateRandom, setsetstateRandom] = useState()
    useEffect(() => {
       
        const URL= `https://pokeapi.co/api/v2/pokemon/${numberID}/`
        axios.get(URL)
            .then(res=> {setsetstateRandom(res.data)})
            .catch(err=> {console.log(err)})
    }, [numberID])
const newVlaue=()=>{
    dispatch(setPokeSlice(Math.floor(Math.random()*100)))  
}
const handleClick=()=>{
    newVlaue()
} 
//!set interval
setInterval(newVlaue, 3000)

useEffect(() => {
    dispatch(setNameSlice(setstateRandom?.name))
}, [setstateRandom?.name])

//console.log(setstateRandom);


  return (
    <div>
        <button onClick={handleClick}
        class="btn btn-outline-primary "
        >ramdom</button>
    </div>
  )
}

export default RandomPoke