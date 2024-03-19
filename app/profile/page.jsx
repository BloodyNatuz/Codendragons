'use server'

import { cookies } from 'next/headers'
import Logout from '../components/client/logout';
import InputWakatimeKey from '../components/client/inputWakatimeKey';
import ResetWakatimeKey from '../components/client/resetWakatimeKey';

export default async function Profile(){
    const cookieStore = cookies();
    const username = cookieStore.get('username');
    const email = cookieStore.get('email');
    const wakatime = cookieStore.get('wakatimekey');

    return (
        <main>
            <p>Username: {username.value}</p>
            <p>Email: {email.value}</p>
            {
                wakatime == undefined
                    ? <InputWakatimeKey/>
                    : (<>
                        <p>Wakatime API Key: {wakatime.value}</p>
                        <ResetWakatimeKey/>
                    </>)
            }
            <br/>
            <Logout/>
        </main>
    )
}