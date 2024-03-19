import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { cookies } from 'next/headers'

export async function POST(request){
    const body = await request.json();
    const cookieStore = cookies();
    const username = cookieStore.get('username');

    cookies().set('wakatimekey', body.wakatimekey);

    return NextResponse.json(sql`UPDATE users SET wakatimekey = ${body.wakatimekey} WHERE username = ${username.value}`);
}