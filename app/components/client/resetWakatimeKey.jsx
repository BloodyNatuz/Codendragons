'use client'

import InputWakatimeKey from "./inputWakatimeKey";
import { useState } from "react";

export default function ResetWakatimeKey(){

    const [resetActive, setResetActive] = useState(false);

    const handleReset = () => {
        setResetActive(true);
    }

    return (
        <>
            {
                resetActive
                ? <InputWakatimeKey/>
                : <button onClick={handleReset}>Reset my Wakatime API Key</button>
            }
        </>

        // 
    )
}