import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Settings() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>My Settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Settings Page</h1>
      </main>

      <Footer />
    </div>
  );
}
