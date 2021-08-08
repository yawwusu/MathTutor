import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useAuth } from "../lib/auth";

export default function Home() {
  const auth = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Welcome to Math Tutor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex flex-col items-center justify-evenly w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to The Math Tutor!!!</h1>
      </main>

      <Footer />
    </div>
  );
}
