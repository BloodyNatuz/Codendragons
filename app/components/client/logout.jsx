'use client'

import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function Logout() {
    const router = useRouter()

    const logout = () => {
        deleteCookie('isLoggedIn')

        // Redirection Login
        window.location.href = "/login"
    }

    return (
        <button onClick={logout}>Logout</button>
    )
}