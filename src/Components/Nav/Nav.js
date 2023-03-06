import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setFilter } from "../../utilities/redux/filterSlice"

export const Nav = () => {

    const filter = useSelector(
        (state) => state.bookFilter.filter
    )

    const dispatch = useDispatch()

    return (
        <nav>
            <input
                onChange={(e) => dispatch(setFilter(e.target.value))}
                value={filter}
                placeholder='Filter by Title (All Caps)'
            ></input>
        </nav>
    )
}