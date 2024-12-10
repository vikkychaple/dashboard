
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = { 
    apiKey: "AIzaSyB6Sg6w6M-VounUDO2KHMk-uXNqpUeWFMY",
  authDomain: "fir-b5c5e.firebaseapp.com",
  projectId: "fir-b5c5e",
  storageBucket: "fir-b5c5e.firebasestorage.app",
  messagingSenderId: "733449867712",
  appId: "1:733449867712:web:8ecf80dd25793789f9b825",
  measurementId: "G-2TR8C00Z8C"
 };
initializeApp(firebaseConfig);

const Auth = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const handleEmailLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => onLogin(userCredential.user))
      .catch(error => console.error(error.message));
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(userCredential => onLogin(userCredential.user))
      .catch(error => console.error(error.message));
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleEmailLogin}>Login</button>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Auth;
