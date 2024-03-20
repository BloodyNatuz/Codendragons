'use server'

import { cookies } from 'next/headers'
import { WakaTimeApi, RANGE, SLICE_BY, SUMMARY_RANGE } from "@nick22985/wakatime-api";

const cookieStore = cookies();
const wakatimekey = cookieStore.get('wakatimekey');
const wakatimeid = cookieStore.get('wakatimeid');

const client = new WakaTimeApi(wakatimekey.value);

export async function GetWakatimeInfos(){
    // Gérer le Last Login (à la fin)
    
    // Calculer if temps passé > 14 alors calcule de temps total
    // let setTodayDate = new Date();
    // let setLastLogin = new Date('01/10/2024');
    // let todayDate = setTodayDate.toLocaleDateString("ja-JP");
    // let lastLogin = setLastLogin.toLocaleDateString("ja-JP");
    // let setDateCompare = new Date(setTodayDate.setDate(setTodayDate.getDate() - 14));
    // let dateCompare = setDateCompare.toLocaleDateString("ja-JP");
    // if (lastLogin < dateCompare) {
    //     console.log("Tu t'es connecté il y a plus de 14 jours")
    //     setLastLogin = new Date();
    //     setTodayDate = new Date();
    // } else {
    //     console.log("Tu t'es connecté il y a moins de 14 jours")
    //     setTodayDate = new Date();
    // }

    try {
        let getUser = await client.getUser("Nathuz_");
        console.log(getUser);
    } catch (err) {
        console.error(err);
    }
}