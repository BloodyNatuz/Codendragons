'use client'

import Link from "next/link";
import { getCookie } from 'cookies-next';
import { useEffect, useState } from "react";

export default function Navbar(){
    const [isLoggedIn, setIsLoggedIn] = useState('false');
    const [username, setUsername] = useState('');


    useEffect(() => {
        const cookiesLoggedIn = getCookie('isLoggedIn');
        const cookieUsername = getCookie('username');
        if (cookiesLoggedIn !== undefined && cookiesLoggedIn) {
            setIsLoggedIn(cookiesLoggedIn);
            setUsername(cookieUsername);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

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
            <div className="nav-group">
                {
                    isLoggedIn
                    ? (
                        
                        <Link href='/profile'>{username}</Link>
                    )
                    : (
                        <>
                            <Link href='/login'>Login</Link>
                            <Link href='/signup'>Signup</Link>
                        </>
                    )
                }
            </div>
        </nav>
    )
}