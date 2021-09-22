import type { NextPage } from 'next'
import 'tailwindcss/tailwind.css'
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { decrement, increment } from "../../redux/dummy_counter"
import { nextName } from "../../redux/dummy_names"

const  Try_Redux: NextPage = () => {
    const { value } = useSelector((state: RootState) => state.counter);
    const { name } = useSelector((state: RootState) => state.names);
    const dispatch = useDispatch();

    return (
        <div>
        <text>
            the count is: { value }
        </text>
        <br/>
        <button onClick={() => dispatch(increment())}>increment</button>
        <br/>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <br/>

        <text>
            the name is: { name }
        </text>
        <br/>
        <button onClick={() => dispatch(nextName())}>change name</button>
        </div>
    )
}

export default Try_Redux