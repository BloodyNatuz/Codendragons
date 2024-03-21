'use client'

import { NextResponse } from "next/server"

export default async function ProfileRedirect(){
    const redirect = window.location.href = "/login"

    return redirect;
}