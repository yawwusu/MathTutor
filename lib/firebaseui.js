/////////////////// REACT-FIREBASEUI WAY ////////////////////

export const uiConfig = (firebase) => {
  return {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    tosUrl: "/terms",
    privacyPolicyUrl: "/privacy",
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true,
      },
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
  };
};

/////////////////// FIREBASEUI WAY ////////////////////

// import firebase from "./firebase";
// import * as firebaseui from "firebaseui";
// import "firebaseui/dist/firebaseui.css";

// const uiConfig = {
//   signInSuccessUrl: "#",
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     {
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       requireDisplayName: true,
//     },
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//     // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     // firebase.auth.GithubAuthProvider.PROVIDER_ID,
//     firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
//   ],
//   // tosUrl and privacyPolicyUrl accept either url string or a callback
//   // function.
//   // Terms of service url/callback.
//   tosUrl: "#",
//   // Privacy policy url/callback.
//   privacyPolicyUrl: windows.location.assign("#"),
// };

// // Initialize the FirebaseUI Widget using Firebase.
// const ui = new firebaseui.auth.AuthUI(firebase.auth());
// // The start method will wait until the DOM is loaded.
// export { ui, uiConfig };
