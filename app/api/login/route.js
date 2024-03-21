'use server'

import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { cookies } from 'next/headers';
import { setCookie } from "cookies-next";

export async function POST(request){
    'use server'
    const body = await request.json();
    try {
        const myuser = await sql`SELECT * from users WHERE email = ${body.email}`;

        // Vérification du Mot de passe
        const passwordMatches = await bcrypt.compare(body.password, myuser.rows[0].password)
        if (passwordMatches) {
            // Réussite du match
            cookies().set('isLoggedIn', true);
            cookies().set('username', myuser.rows[0].username);
            cookies().set('email', myuser.rows[0].email);

            return NextResponse.json(myuser.rows[0]);
        } else{
            // Echec du match
            res.status(403).json({ status: 'Error', message: 'Invalid password' })
        }
    } catch (error) {
        res.status(500).json({ status: 'Error', message: error.message })
    }
}