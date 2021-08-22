import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
// import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import { firestore } from "../lib/db";
import ProgressChart from "../components/ProgressChart";
// import DonutChart from "../components/DonutChart";
// import data from "../utils/data";

// const ProgressChart = dynamic(() => import("../components/ProgressChart"));

export default function Dashboard() {
  const router = useRouter();

  // TODO: This is sort of a hack, improve handling of progress later
  const [progress, setProgress] = React.useState([{ value: 20 }]);

  // React.useEffect(() => {
  //   const unsubscribe = firestore
  //     .collection("progress")
  //     .onSnapshot((snapshot) =>
  //       setProgress(snapshot.docs.map((doc) => doc.data()))
  //     );
  //   return unsubscribe;
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Your Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <ProgressChart progress={progress[0].value} />
        {/* <DonutChart data={data} /> */}
        <button
          className="bg-green-400 p-1.5 mt-2"
          onClick={() => router.push("/practice")}
        >
          Practice
        </button>
      </main>

      <Footer />
    </div>
  );
}
