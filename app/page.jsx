import Cart from "./components/server/showUser";

export const metadata = {
  title: "Code And Dragons - Accueil",
};

export default function Home() {
  return (
    <main>
      <h1>Home page!</h1>
      <Cart />
    </main>
  );
}