import React from 'react'
import { useForm } from 'react-hook-form'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/FormPoke.css'
const ValueDefault=''

const FormPoke = ({setNamePoke2}) => {

const{handleSubmit, register,reset } =useForm()

const handleSubmitName=(name)=>{
    let namePokemon1=name['name'].trim().toLowerCase()
    setNamePoke2(namePokemon1)
    console.log(namePokemon1);

}

  return (
    <div  className='form_card'>
        <form onSubmit={handleSubmit(handleSubmitName)}>
                <input type="text" id='name' placeholder="put name pokemon"  {...register('name')}/>
                <button 
                  class="btn btn-outline-primary " >
                    send
                </button>
              
           
        </form>
    </div>
  )
}

export default FormPoke