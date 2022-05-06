import React from "react";
import Sidebar from "./components/Sidebar"
import Reviews from "./components/Reviews"
import AverageRating from "./components/AverageRating"
import SentimentAnalysis from "./components/SentimentAnalysis"
import WebsiteVistiors from "./components/WebsiteVistiors"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <Reviews />
      <AverageRating />
      <SentimentAnalysis />
      <WebsiteVistiors />
    </div>
  );
}