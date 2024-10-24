import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAT46IRXyLHS-mjinIPIGL_VQSE-Xkx70I",
  authDomain: "test-1-6a94b.firebaseapp.com",
  projectId: "test-1-6a94b",
  storageBucket: "test-1-6a94b.appspot.com",
  messagingSenderId: "276685589311",
  appId: "1:276685589311:web:56dc9be28570ed5f43a18a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <button
        onClick={async () => {
          try {
            const docRef = await addDoc(collection(db, "users"), {
              first: "Ada2",
              last: "Lovelace2",
              born: 1812,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }}
      >
        send data to firestore
      </button>
      <button
        onClick={async () => {
          const querySnapshot = await getDocs(collection(db, "users"));
          console.log("🚀 ~ onClick={ ~ querySnapshot:", querySnapshot);
          querySnapshot.forEach((doc) => {
            console.dir(`${doc.id} => ${doc.data().first}`);
          });
        }}
      >
        read data from firestore
      </button>
    </>
  );
}

export default App;
