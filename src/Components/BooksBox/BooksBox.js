// import { BookCard } from '../BookCard/BookCard'
import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { getData } from '../../utilities/apiCalls'
 
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
        <section>
            { books
                .filter((book) => 
                    filterBy ? book.title.includes(filterBy) : true 
                )
                .map((book) => (
                    <div key={book.title}>
                        {book.title}
                    </div>
                ))}
        </section>
    )
}