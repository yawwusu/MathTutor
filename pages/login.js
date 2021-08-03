import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Login to MathTutor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Login/Register Page</h1>
      </main>

      <Footer />
    </div>
  );
}
