'use client'

import { useState } from "react";
import Link from "next/link";
  
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
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (formData.password !== formData.confirmPassword){
        console.log("Mots de passe ne correspondent pas")
        console.log(formData.password + ' pas égal à ' + formData.confirmPassword)
      } else{
        console.log(formData.email)
        console.log(formData.username)
        console.log(formData.password)

        const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })
      }
    };

    return (
      <main className="signup">
        <img className="signup-img" src="/logo-light.svg" alt="Logo de Code & Dragons" />
        <h1>Sign up</h1>
        
        <form onSubmit={handleSubmit}>
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
          <p>Already have an account? <Link to='/signin' className="tertiary-btn" href="/signin">Sign in.</Link></p>
        </form>
      </main>
    );
  }
  