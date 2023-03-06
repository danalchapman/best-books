import React, { useEffect } from 'react'
import { getData } from '../../utilities/apiCalls'
import './App.css'

export const App = () => {

  useEffect(() => {
    getData()
      .then(data => console.log(data.results.books))
  })

  return (
    <main className='main-app'>
      <h1>Best Books</h1>
    </main>
  )
}

