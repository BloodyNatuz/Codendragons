import Link from "next/link"

export async function SignInForm(){
    return(
        <form>
            <fieldset>
                <legend>Email</legend>
                <input type="email" name="email" placeholder="exemple@mail.com" required/>
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                <input type="password" name="password" placeholder="SuperPass0rd!" required/>
            </fieldset>
            <input className="primary-btn" type="submit" value="Sign in"/>
            <p>Don't have an account ? <Link className="tertiary-btn" href="/signup">Sign up.</Link></p>
        </form>
    )
}