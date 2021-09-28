import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import TodoContainer from "./functionBased/components/ToDoContainer";
import "./functionBased/app.css";


ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);
