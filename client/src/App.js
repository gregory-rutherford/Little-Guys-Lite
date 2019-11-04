import React from 'react';
import Login from "./pages/login";
import Estimate from "./pages/Estimate";
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import {BrowserRouter as Router, Route } from "react-router-dom";
import SummaryBox from "./components/SummaryBox";

function App() {
  return (
    <Router>
      <Wrapper>
        <Header></Header>
        <Route exact path="/" component={Login} />
        <Route exact path="/estimate" component={Estimate} />
        <SummaryBox exact path="/summary" />
      </Wrapper>
    </Router>
  );
}

export default App;
