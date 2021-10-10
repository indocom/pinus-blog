import type { NextPage } from 'next'
import 'tailwindcss/tailwind.css'
import React, { useState } from 'react'
import { initFirebase } from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';

const  Sign_In: NextPage = () => {

    const [state, setState] = useState(
        {
            email: "",
            password: '',
        }
    );

    const handleChange = (e : React.FormEvent<HTMLInputElement>): void => {
        setState({
            ...state, [e.currentTarget.id]: e.currentTarget.value
        })
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        let email = state["email"];
        let password = state["password"];

        const app = initFirebase();
        const auth = getAuth(app);

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("success");
        }).catch((error) => {
            console.log(error);
            console.log("failll");
        })
      };

    return (
        <div className="p-5">
        <form onSubmit={handleSubmit}>
            <h5 className="text-xl font-bold">Sign In</h5>
            <div>
            <label htmlFor="email">Email</label>
            <input className="shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="email" id='email' onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input className="shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" id='password' onChange={handleChange} />
            </div>
            <div>
            <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Login</button>
            </div>
        </form>
        </div>
    );
}

export default Sign_In