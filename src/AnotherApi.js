import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const AnotherApi = () => {
  const [state, setState] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        setState(response.data)
    })

    axios.post('https://jsonplaceholder.typicode.com/posts', {
        id:1,
        title: 'Phani Power 💪',
    })
    .then(response => {
        setState(prev => [...prev, response.data])
    })

    axios.put('https://jsonplaceholder.typicode.com/posts/1', {
        id:1,
        title: 'Phani Power is strength 💪',
    })
    .then(response => {
        setState(prev => [...prev, response.data])
    })

    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        setState(prev => prev.filter(item => item.id !== 1))
    })
      
  }, [])
    console.log(state)
  return (
    <>
        {state.map(item => {
            return (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                </div>
            )
        })}
    </>
  )
}

export default AnotherApi