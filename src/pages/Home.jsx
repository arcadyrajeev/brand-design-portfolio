import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <Navbar />
      <HomeContent />
    </div>
  );
}
