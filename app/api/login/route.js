import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

export async function POST(request){
    const body = await request.json();
    try {
        const myuser = await sql`SELECT * from users WHERE email = ${body.email}`;

        // Vérification du Mot de passe
        const passwordMatches = await bcrypt.compare(body.password, myuser.rows[0].password)
        if (passwordMatches) {
            // Réussite du match
            return NextResponse.json(myuser.rows[0]);
            res.status(200).json({ status: 'Success', message: 'Login successful' })
        } else{
            // Echec du match
            res.status(403).json({ status: 'Error', message: 'Invalid password' })
        }
    } catch (error) {
        res.status(500).json({ status: 'Error', message: error.message })
    }
}