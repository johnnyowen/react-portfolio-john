import React, { useState } from "react";
import Header from "./components/Header";
import Page from "./Page";
import Footer from "./components/Footer";

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
