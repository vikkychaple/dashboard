
import React, { useState } from "react";
import Auth from "./components/Auth";
import News from "./components/News";
import Payout from "./components/Payout";

const App = () => {
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]); 

  return (
    <div className="App">
      {!user ? (
        <Auth onLogin={(user) => setUser(user)} />
      ) : (
        <>
          <h1>Welcome, {user.displayName || user.email}</h1>
          <News setArticles={setArticles} />
          <Payout articles={articles} />
        </>
      )}
    </div>
  );
};

export default App;
