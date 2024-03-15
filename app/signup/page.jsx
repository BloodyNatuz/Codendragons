'use client'

import { useState } from "react";
import Link from "next/link";
import { NextResponse } from "next/server";
  
  export default function Signup() {

    const [formData, setFormData] = useState({
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    // Message states
    const [appearance, setAppearance] = useState('appearance-null');
    const [messageContent, setMessageContent] = useState(' ');

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (formData.password !== formData.confirmPassword){
        setAppearance('appearance-error');
        setMessageContent('Les mots de passe ne correspondent pas');
      } else{
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })
        setAppearance('appearance-success');
        setMessageContent('Votre compte a été créé avec succès !');
      }
    };

    return (
      <main className="signup">
        <img className="signup-img" src="/logo-light.svg" alt="Logo de Code & Dragons" />
        <h1>Sign up</h1>
        
        <form onSubmit={handleSubmit}>
          <div className={appearance}>
            <p>{messageContent}</p>
          </div>
          <fieldset>
              <legend>Email</legend>
              <input type="email" name="email" placeholder="exemple@mail.com" value={formData.email} onChange={handleInputChange}/>
          </fieldset>
          <fieldset>
              <legend>Username</legend>
              <input type="text" name="username" placeholder="MyUserName" value={formData.username} onChange={handleInputChange}/>
          </fieldset>
          <fieldset>
              <legend>Password</legend>
              <input type="password" name="password" placeholder="SuperPassw0rd!" value={formData.password} onChange={handleInputChange}/>
          </fieldset>
          <fieldset>
              <legend>Confirm password</legend>
              <input type="password" name="confirmPassword" placeholder="SuperPassw0rd!" value={formData.confirmPassword} onChange={handleInputChange}/>
          </fieldset>
          <input className="primary-btn" type="submit" value="Sign up" />
          <p>Already have an account? <Link to='/signin' className="tertiary-btn" href="/login">Sign in.</Link></p>
        </form>
      </main>
    );
  }
  