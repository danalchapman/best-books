import './BookCard.css'

export const BookCard = () => {
    return (
        <div>
            <img 
                className='card-img'
                src={ book.image }
                alt={`thumbnail of ${ book.title }`}
            />
            <h3 className='title'>{ book.title }</h3>
            <p>{ book.author }</p>
        </div>
    )
}