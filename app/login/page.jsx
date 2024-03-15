'use client'

import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Signin() {
  const { push } = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Données de connexion
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData) {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok){
        const user = await response.json()

        setUser(user);
        setIsLoggedIn(true);
      } else (
        console.log ("Mot de passe incorrect")
      )
    } else{
      console.log("Champs vide")
    }
  };

  return (
    <main className="signin">
      <img className="signin-img" src="/logo-light.svg" alt="Logo de Code & Dragons" />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
          <fieldset>
              <legend>Email</legend>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="exemple@mail.com" required/>
          </fieldset>
          <fieldset>
              <legend>Password</legend>
              <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="SuperPass0rd!" required/>
          </fieldset>
          <input className="primary-btn" type="submit" value="Sign in"/>
          <p>Don't have an account ? <Link className="tertiary-btn" href="/signup">Sign up.</Link></p>
      </form>
    </main>
  );
}
  