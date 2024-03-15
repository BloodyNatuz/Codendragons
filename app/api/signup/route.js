import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

export async function GET(request){
    const users = await sql`SELECT * from users`;
    return NextResponse.json(users.rows);
}

export async function POST(request){
    const body = await request.json();
    const myPlaintextPassword = body.password;
    const hash = await bcrypt.hash(myPlaintextPassword, 10)

    return NextResponse.json(sql`INSERT INTO users (email, username, password) VALUES (${body.email}, ${body.username}, ${hash})`);

    const users = await sql`SELECT * from users`;
    return NextResponse.json(users.rows);
}