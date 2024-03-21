'use server'

import { cookies } from 'next/headers'


export async function GetWakatimeInfos(){
    const cookieStore = cookies();
    const wakatimekey = cookieStore.get('wakatimekey');
    const wakatimeid = cookieStore.get('wakatimeid');
    
    // Calculer if temps passé > 14 alors calcule de temps total
    // let setTodayDate = new Date();
    // let setLastActive = new Date('01/10/2024');
    // let todayDate = setTodayDate.toLocaleDateString("ja-JP");
    // let lastActive = setLastActive.toLocaleDateString("ja-JP");
    // let setDateCompare = new Date(setTodayDate.setDate(setTodayDate.getDate() - 14));
    // let dateCompare = setDateCompare.toLocaleDateString("ja-JP");


    // if (lastActive < dateCompare) {
    //     console.log("Tu t'es connecté il y a plus de 14 jours")
    //     setLastActive = new Date();
    //     setTodayDate = new Date();
    // } else {
    //     console.log("Tu t'es connecté il y a moins de 14 jours")
    //     setTodayDate = new Date();
    //      setLastActive = new Date();
    // }

    if (wakatimekey == undefined || wakatimeid == undefined) {
        // Pas d'infos
    } else{
        let urlWakatime = 'https://wakatime.com/api/v1/users/' + wakatimeid.value + '/stats?api_key=' + wakatimekey.value;
        try {
            let res = await fetch(urlWakatime);
            if (!res.ok) {
                console.error("Error code : " +res.status);
            } else {
                let datas = await res.json();
                console.log(datas.data.languages[0].name);
                console.log(datas.data.languages[0].hours);
            }
        } catch (err) {
            console.error(err)
        }
    }
}