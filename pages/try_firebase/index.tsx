import type { NextPage } from 'next'
import 'tailwindcss/tailwind.css'
import React, { useState } from 'react'
import { initFirebase } from "../../firebase";
import { useDispatch, useSelector } from "react-redux"
import { getAuth, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import { RootState } from "../../redux/store"
import { log_in, log_out } from "../../redux/firebase"

const  Sign_In: NextPage = () => {

    const { logged_in, email } = useSelector((state: RootState) => state.firebase);

    const dispatch = useDispatch();

    const [details, setDetails] = useState(
        {
            email: "",
            password: '',
        }
    );

    const handleChange = (e : React.FormEvent<HTMLInputElement>): void => {
        setDetails({
            ...details, [e.currentTarget.id]: e.currentTarget.value
        })
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const app = initFirebase();
        const auth = getAuth(app);

        signInWithEmailAndPassword(auth, details["email"], details["password"]).then((userCredential) => {
            const temp = userCredential.user.email === null ? "" : userCredential.user.email;
            dispatch(log_in(temp));
        }).catch((error) => {
            console.log(error);
            console.log("failll");
        })
      };

      const logout = async () =>  {

        const app = initFirebase();
        const auth = getAuth(app);
        
        signOut(auth).then(() => {
            dispatch(log_out());
        }).catch((error) => {
            console.log(error);
            console.log("failll");
        })
      }

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
        <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={logout}>Logout</button>
        {logged_in && <div> You are logged in! </div>}
        </div>
    );
}

export default Sign_In