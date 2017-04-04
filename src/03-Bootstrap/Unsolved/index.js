import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Write code here to create a Bootstrap HTML page using JSX

// JSX should be returned from a function, the function should be exported at the bottom of the page

// Bootstrap should be included somehow. Possible options include:

// Adding a script tag to the index.html page

// Installing bootstrap from NPM and importing it where needed

function App() {
  return (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">React-Review</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
    </div>
</nav>
  );
}

export default App;
