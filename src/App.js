import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import LoginControls from "./components/LoginControls";
import NavigationBar from "./components/NavigationBar";
import NewsletterForm from "./components/NewsletterForm";
import SearchBar from "./components/SearchBar";
import StatsBar from "./components/StatsBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroSection />
        <LoginControls />
        <NavigationBar />
        <NewsletterForm />
        <SearchBar />
        <StatsBar />
      </header>
    </div>
  );
}

export default App;
