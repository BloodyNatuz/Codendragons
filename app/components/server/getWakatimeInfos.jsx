'use server'

import { WakaTimeClient } from 'wakatime-client';
import { cookies } from 'next/headers'
import { RANGE } from 'wakatime-client';

const cookieStore = cookies();
const wakatimekey = cookieStore.get('wakatimekey');
const wakatimeid = cookieStore.get('wakatimeid');

const client = new WakaTimeClient(wakatimekey.value);

export async function GetWakatimeInfos(){


    // Gérer le Last Login (à la fin)
    
    // Calculer if temps passé > 14 alors calcule de temps total
    let setTodayDate = new Date();
    let setLastLogin = new Date('01/10/2024');
    let todayDate = setTodayDate.toLocaleDateString("ja-JP");
    let lastLogin = setLastLogin.toLocaleDateString("ja-JP");
    let setDateCompare = new Date(setTodayDate.setDate(setTodayDate.getDate() - 14));
    let dateCompare = setDateCompare.toLocaleDateString("ja-JP");
    if (lastLogin < dateCompare) {
        console.log("Tu t'es connecté il y a plus de 14 jours")
        setLastLogin = new Date();
        setTodayDate = new Date();
    } else {
        console.log("Tu t'es connecté il y a moins de 14 jours")
        setTodayDate = new Date();
    }

    try {
        const myStats = await client.getUserSummary({
            userId: wakatimeid.value,
        dateRange: {
            startDate: dateCompare,
            endDate: todayDate,
        },
    });
        console.log(myStats);

    } catch (err) {
        console.error(err);
    }
}