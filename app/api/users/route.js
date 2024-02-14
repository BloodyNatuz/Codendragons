import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request){
    const users = await sql`SELECT users.username, users.email from users WHERE id = 2`;
    return NextResponse.json(users.rows[0]);
}

export async function POST(request){
    const body = await request.json();
    return NextResponse.json(sql`INSERT INTO users (email, username, password) VALUES (${body.email}, ${body.username}, ${body.password})`)
}