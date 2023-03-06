const initialState = {
    booksData: []
}

const books = (state = initialState, action) => {
    switch (action.type) {
        case "setBooksData":
            return {...state, booksData: action.booksData }
        default:
            return state
    }
}

export default books