'use client'

import { useState } from "react"

export default function InputWakatimeKey(){
    const [formData, setFormData] = useState({
        wakatimekey: '',
        wakatimeid: ''
      });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.wakatimekey.length == null || formData.wakatimeid.length == null){
            // setAppearance('appearance-error');
            // setMessageContent('Aucune API Key rentrée');
        } else{
            const response = await fetch('/api/wakatimekey', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            // setAppearance('appearance-success');
            // setMessageContent('Votre compte a été créé avec succès !');
            window.location.reload();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Wakatime API Key</legend>
                <input name="wakatimekey" type="text" value={formData.wakatimekey} onChange={handleInputChange}></input>
            </fieldset>
            <fieldset>
                <legend>Wakatime username</legend>
                <input name="wakatimeid" type="text" value={formData.wakatimeid} onChange={handleInputChange}></input>
            </fieldset>

            <input type="submit" />
        </form>
    )
}