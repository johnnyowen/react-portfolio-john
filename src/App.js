import React, { useState } from "react";
import Header from "./components/Header";
import Page from "./Page";
import Footer from "./components/Footer";
// ^ importing components and react hook

// creating pages array to store all the pages and swap between them without refreshing
const pages = ["About", "Portfolio", "Contact", "Resume"];

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  return (
    <div className="wrapper">
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
