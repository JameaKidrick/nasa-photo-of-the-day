import React from "react";
import "./App.css";
import ArticleList from './components/Article/ArticleList'
import NavBar from './components/Navigation/NavBar'
import Carousel from './components/Header/Carousel'

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        {/* <Carousel /> */}
        <ArticleList />
      </div>
    </>
  );
}

export default App;
