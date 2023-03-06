// import { BookCard } from '../BookCard/BookCard'
import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { getData } from '../../utilities/apiCalls'

import './BooksBox.css'
 
export const BooksBox = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        getData()
            .then(data => setBooks(data.results.books))
    }, [])

    const filterBy = useSelector(
        (state) => state.bookFilter.filter
    )

    return (
        <section className='book-container'>
            { books
                .filter((book) => 
                    filterBy ? book.title.includes(filterBy) : true 
                )
                .map((book) => (
                    <div key={book.title} className='book-card'>
                        <img 
                            className='card-img'
                            src={ book.book_image }
                            alt={`thumbnail of ${ book.title }`}
                        />
                        <h3 className='title'>{ book.title }</h3>
                        <p>{ book.author }</p>
                    </div>
                ))}
        </section>
    )
}