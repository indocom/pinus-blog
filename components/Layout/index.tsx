import NavBar from "../Navbar";
import Footer from '../Footer';
import { ReactNode } from "react";
import React from 'react'

interface iProps {
    children: ReactNode
}

const Layout= ({children}: iProps) => {
    return (
        <div className="content">
            <NavBar />
            { children }
            <Footer />
        </div>
    );
}

export default Layout;