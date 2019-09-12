import React from "react";
import "./App.css";
import ArticleList from './components/Article/ArticleList'
import NavBar from './components/Navigation/NavBar'
import Carousel from './components/Header/Carousel'
import PicOfDay from './components/Article/PicOfDay'

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <ArticleList />
      </div>
    </>
  );
}

export default App;

// 4/19/2018
