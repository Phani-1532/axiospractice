import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Api = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        
       axios.get('https://ghibliapi.vercel.app/films')
       .then(response => {
            console.log(response)
            setState(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    console.log(state)
    
  return (
    <>
        {state.map(item => {
            return (
                <div key={item.id}>
                    <img src ={item.image} />
                </div>
            )
        })}
    </>
  )
}

export default Api