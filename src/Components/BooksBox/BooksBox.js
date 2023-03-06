import { BookCard } from '../BookCard/BookCard'

export const BooksBox = ({ books }) => {

    const displayCards = () => {
        return books.map(book => {
            return (
                <BookCard 
                    key={ book.title }
                    title={ book.title }
                />
            )
        })
    }

    return (
        <section>
            { displayCards() }
        </section>
    )
}