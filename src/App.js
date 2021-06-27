import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import RecommendedVids from "./Components/RecommendedVids";
import SearchPage from "./Components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// AIzaSyDrctz_uPcHUAsVHIPmS9OwZEzReB9ySgY
// AIzaSyDrctz_uPcHUAsVHIPmS9OwZEzReB9ySgY
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=zakir%20khan&key=[YOUR_API_KEY]

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search/:SearchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVids />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
