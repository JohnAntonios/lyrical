import React from "react";
import { Route, Switch } from "wouter";
import Result from "@pages/Result";
import Home from "@pages/Home";
import Footer from "@components/Footer";
import GlobalStyle from "./GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/result/:query" component={Result} />
        <Route>Not Found</Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
