import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

const mode = import.meta.env.MODE;

const firebaseConfig = {
  apiKey: "AIzaSyAT46IRXyLHS-mjinIPIGL_VQSE-Xkx70I",
  authDomain: "test-1-6a94b.firebaseapp.com",
  projectId: "test-1-6a94b",
  storageBucket: "test-1-6a94b.appspot.com",
  messagingSenderId: "276685589311",
  appId: "1:276685589311:web:56dc9be28570ed5f43a18a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();

export function LoginPage() {
  //   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <>
      <h1>LoginPage</h1>
      <button
        onClick={async () => {
          try {
            if (mode === "production") {
              signInWithRedirect(auth, providerGoogle).catch((error) =>
                console.error(error)
              );
            } else {
              await signInWithPopup(auth, providerGoogle);
            }
          } catch (error) {
            console.error("Error signing in with Google:", error);
          }
        }}
      >
        login with google btn
      </button>
      <button
        onClick={() => {
          signOut(auth)
            .then(() => {
              console.log("signOut success");
            })
            .catch((error) => {
              console.log("🚀 ~ LoginPage ~ error:", error);
            });
        }}
      >
        log out
      </button>
      <button
        onClick={() => {
          const auth = getAuth(app);
          const user = auth.currentUser;
          console.log("🚀 ~ LoginPage ~ user:", user);
        }}
      >
        show user
      </button>
    </>
  );
}
