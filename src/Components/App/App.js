import React, { useEffect, useState } from 'react'

import { setBooksData } from '../../utilities/redux/actions'
import { useSelector } from 'react-redux'

import { BooksBox } from '../BooksBox/BooksBox'

import { getData } from '../../utilities/apiCalls'
 
import './App.css'

export const App = () => {

  // const { booksData } = useSelector(setBooksData)
  const [books, setBooks] = useState([])

  useEffect(() => {
    getData()
      .then(data => setBooks(data.results.books))
  }, [])

  return (
    <main className='main-app'>
      <h1>Best Books</h1>
      <BooksBox books={books}/>
    </main>
  )
}

