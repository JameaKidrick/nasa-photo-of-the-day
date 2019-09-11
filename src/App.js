import React, { useState, useEffect } from "react";
import "./App.css";
import ArticleList from './components/ArticleList'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <ArticleList />
    </div>
  );
}

export default App;
