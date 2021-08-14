import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router";

// Firebase related
// import { useAuthState } from "react-firebase-hooks/auth";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import { auth } from '../lib/auth';
import firebase from "../lib/firebase";
import { useAuth } from "../lib/auth";
// import { uiConfig } from "../lib/firebaseui";

export default function Login() {
  // const [user, loading, error] = useAuthState(auth);
  const auth = useAuth();
  const router = useRouter();

  if (auth.user) {
    // user is logged in, redirect to user's dashboard
    router.push("/dashboard");
  }

  // const authConfig = uiConfig(firebase);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex flex-col items-center justify-evenly w-full flex-1 px-20 text-center">
        <h3 className="text-3xl">
          Login/ Register so we save and track your progress!
        </h3>
        <p>No need to create another account!</p>
        {/* <StyledFirebaseAuth uiConfig={authConfig} firebaseAuth={auth} /> */}
        <div className="flex flex-col">
          <button
            className="bg-gray-200 p-1.5"
            onClick={() => auth.signInWithGoogle()}
          >
            Login/Register With Google
          </button>
          <button
            className="bg-gray-200 p-1.5 mt-2"
            onClick={() => auth.signInWithFacebook()}
          >
            Login/Register With Facebook
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
