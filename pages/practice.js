import Head from "next/head";
import { useRouter } from "next/router";
// import * as React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import QuestionForm from "../components/QuestionForm";
// import { firestore } from "../lib/db";
import questions from "../scripts/temp_data.js";

export default function Practice() {
  // const [questions, setQuestions] = React.useState([]);
  const router = useRouter();

  // React.useEffect(() => {
  //   const unsubscribe = firestore
  //     .collection("questions")
  //     .onSnapshot((snapshot) =>
  //       setQuestions(snapshot.docs.map((doc) => doc.data()))
  //     );
  //   return unsubscribe;
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className="flex flex-col items-center justify-center w-50 flex-1 px-20 ">
        <button
          className="bg-gray-400 p-1.5 mt-2"
          onClick={() => router.push("/dashboard")}
        >
          Back To Dashboard
        </button>
        <QuestionForm questions={questions} />
      </main>
      <Footer />
    </div>
  );
}
