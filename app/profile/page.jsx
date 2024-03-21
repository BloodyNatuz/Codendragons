'use server'

import { cookies } from 'next/headers'
import Logout from '../components/client/logout';
import InputWakatimeKey from '../components/client/inputWakatimeKey';
import ResetWakatimeKey from '../components/client/resetWakatimeKey';
import { GetWakatimeInfos } from '../components/server/getWakatimeInfos';
import ProfileRedirect from './redirection';

export default async function Profile(){
    const cookieStore = cookies();
    const username = cookieStore.get('username');
    const email = cookieStore.get('email');
    const wakatimekey = cookieStore.get('wakatimekey');
    const wakatimeid = cookieStore.get('wakatimeid')

    return (
        <main>
            {
                username == undefined || email == undefined
                ? <ProfileRedirect></ProfileRedirect>
                : (
                    <>
                        <p>Username: {username.value}</p>
                        <p>Email: {email.value}</p>
                    </>
                )
            }

            {
                wakatimekey == undefined || wakatimeid == undefined
                    ? <InputWakatimeKey/>
                    : (<>
                        <p>Wakatime API Key: {wakatimekey.value}</p>
                        <p>Wakatime username: {wakatimeid.value}</p>
                        <ResetWakatimeKey/>
                    </>)
            }
            <GetWakatimeInfos/>
            <br/>
            <Logout/>
        </main>
    )
}