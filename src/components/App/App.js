import React from "react";
import { Navbar } from "../";
import AuthModal from "../AuthModal/AuthModal";

function App() {
  return (
    <div className="App">
      <AuthModal />
      <Navbar />
    </div>
  );
}

export default App;
