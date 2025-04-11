import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Another = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'Phani Power 💪',
            id: 1
        }).then(response => setState(response.data))
    }, [])
   
  return (
    <>
       
             <div key={state.id}>
                 <h2>{state.title}</h2>
              
             </div>
        
    </>
  )
}

export default Another