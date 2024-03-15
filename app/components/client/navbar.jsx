'use client'

import Link from "next/link";

export default function Navbar(){

    var isLogged = false;

    function Rightnav(){
        if (isLogged) {
            return (
                <div className="nav-group">
                    <Link href='/' className="nav-link">My username</Link>
                </div>
            )
        } else {
            return (
                <div className="nav-group">
                    <Link href='/login' className="nav-link">Login</Link>
                    <Link href='/signup' className="nav-link">Signup</Link>
                </div>
            )
        }
    }

    return (
        <nav>
            <div className="nav-group">
                <Link href='/' className="nav-link">
                    <img src="/logo-light.svg" alt="Logo de Code & Dragons" />
                </Link>
            </div>
            <div className="nav-group">
                <Link href='/' className="nav-link">Hero</Link>
                <Link href='/' className="nav-link">Docs</Link>
                <Link href='/' className="nav-link">About</Link>
                <Link href='/' className="nav-link">Contact</Link>
            </div>
            <Rightnav/>
        </nav>
    )
}