import React from "react";
import "./App.scss";
import Blockchain from "./pages/Blockchain";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Blockchain} />
      </Router>
    </div>
  );
}

export default App;
