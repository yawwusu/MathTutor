import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useAuth } from "../lib/auth";

export default function Home() {
  const auth = useAuth();
  const router = useRouter();

  if (auth.user) {
    // user is logged in, redirect to user's dashboard
    router.push("/dashboard");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex flex-col items-center justify-evenly w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to The Math Tutor!!!</h1>
        <p className="text-m">
          Use the user icon at the top-right corner of the page to go to the
          login screen.
        </p>
      </main>

      <Footer />
    </div>
  );
}
