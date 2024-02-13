import { SignInForm } from "../components/client/signinForm";

export const metadata = {
    title: "Code And Dragons - SignIn",
};
  
  export default function Signin() {
  
    return (
      <main className="signin">
        <img className="signin-img" src="/logo-light.svg" alt="Logo de Code & Dragons" />
        <h1>Sign in</h1>
        <SignInForm/>
      </main>
    );
  }
  