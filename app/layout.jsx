import "./style/main.scss";
import Navbar from "./components/client/navbar";

export const metadata = {
  title: "Code And Dragons",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar/>  
        {children}
      </body>
    </html>
  );
}
