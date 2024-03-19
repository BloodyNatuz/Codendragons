'use server'

import { cookies } from 'next/headers'
import Logout from '../components/client/logout';

export default async function Profile(){
    const cookieStore = cookies();
    const username = cookieStore.get('username');
    const email = cookieStore.get('email');

    return (
        <main>
            <p>Username: {username.value}</p>
            <p>Email: {email.value}</p>
            <Logout/>
        </main>
    )
}