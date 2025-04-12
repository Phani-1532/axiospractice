import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AnotherApi = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        let response = await axios.get('http://localhost:3000/products')
        setData(response.data)
    }

    const postData = async () => {
        let response = await axios.post('http://localhost:3000/products', {
            id: "4",
            name: 'New Product',
            price: 48.99
        })
        setData([...data, response.data])
    }

    const putData = async () => {
        let response = await axios.put('http://localhost:3000/products/4', {
            id: "4",
            name: 'New Product updated',
            price: 58.99
        })
        setData(data.map(item => item.id === '4' ? response.data :item))
    }

    const deleteData = async () => {
        await axios.delete('http://localhost:3000/products/4')
        setData(data.filter(item => item.id !== '4'))
        
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h1>Another API</h1>
            <button onClick={fetchData}>GET</button>
            <button onClick={postData}>POST</button>
            <button onClick={putData}>PUT</button>
            <button onClick={deleteData}>DELETE</button>

            <div className='container'>
                {data.map((item) => (
                    <div key={item.id} className='product'>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AnotherApi
