import React, { useEffect, useState } from 'react'

import { setBooksData } from '../../utilities/redux/actions'
import { Nav } from '../Nav/Nav'
import { BooksBox } from '../BooksBox/BooksBox'
 
import './App.css'

export const App = () => {

  return (
    <main className='main-app'>
      <h1>Best Books</h1>
      <Nav />
      <BooksBox />
    </main>
  )
}

