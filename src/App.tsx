import React from "react";
import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "react-query";
import Result from "@pages/Result";
import Home from "@pages/Home";
import Footer from "@components/Footer";
import './style.css';
import GlobalStyle from "./GlobalStyle";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} />
        <QueryClientProvider client={queryClient}>
          <Route path="/result/:query" component={Result} />
        </QueryClientProvider>
        <Route>Not Found</Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
