import React from 'react'
import { BASE_URL } from '../constant/index'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

import "./Categories.css"

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function getCategories() {
            try {
                const response = await axios(`${BASE_URL}`)
                setCategories(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getCategories()
    }, [])
    if (categories.length === 0) {
        return <p className="loading">LOADING...</p>
    }



    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>

                </tr>
            </thead>
            <tbody>

                {categories.map((s) => {
                    return (
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.description}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Categories