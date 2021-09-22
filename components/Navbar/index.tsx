import { NextPage } from 'next';
import Link from 'next/link'
import React from 'react'

const NavBar: NextPage = () => {
    return (
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <a href="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Pinus Blog</a>
        </div>
        <div>
          <a href="/admin" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Admin</a>
          <a href="/try_redux" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Try_Redux</a>
        </div>
        </nav>
    );
}
 
export default NavBar;