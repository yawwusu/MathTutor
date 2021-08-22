import firebase from "./firebase";

export const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export async function updateProgress(value) {
  const progressRef = firestore.collection("progress").doc("1");
  const doc = await progressRef.get();
  const newValue = doc.data().value + value;
  return progressRef.set({ value: newValue });
}
