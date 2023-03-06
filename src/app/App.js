import React, { useEffect } from 'react'
import { getData } from '../utilities/apiCalls'

export const App = () => {

  useEffect(() => {
    getData()
      .then(data => console.log(data.results.books))
  })

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  )
}

