import logo from './logo.svg';
import './maquetacion.css';
import React from "react";

function App() {
  return (
    <div>
      <div className="navbar">
          <a href="http://" className="nav-el">CSS Layout</a>
          <a href="http://" className="nav-el">CSS Layout</a> 
          <a href="http://" className="nav-el">CSS</a>
          <a href="http://" className="nav-el">CSS Layout</a>
          <a href="http://" className="nav-el">CSS Layout</a>
      </div>

      <div className="content">
        <div className="card">
        <div className="card-title">
              THIS IS A CARD
            </div>
            <div className="card-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </div>
        </div>
        <div className="card">
        <div className="card-title">
              THIS IS A CARD
            </div>
            <div className="card-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </div>
        </div>
        <div className="card">
        <div className="card-title">
              THIS IS A CARD
            </div>
            <div className="card-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </div>
      
      </div>

        </div>
        <footer className="footer">Footer</footer>
        </div>

   
  );
}

export default App;