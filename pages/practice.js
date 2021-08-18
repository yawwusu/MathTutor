import Head from "next/head";
import * as React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import QuestionForm from "../components/QuestionForm";
import { firestore } from "../lib/db";

export default function Practice() {
  const [question, setQuestion] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = firestore
      .collection("questions")
      .onSnapshot((snapshot) =>
        setQuestion(snapshot.docs.map((doc) => doc.data()))
      );
    return unsubscribe;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className="flex flex-col items-center justify-center w-50 flex-1 px-20 ">
        <QuestionForm question={question[0]} />
      </main>
      <Footer />
    </div>
  );
}
