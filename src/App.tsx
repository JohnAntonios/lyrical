import React, { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "react-query";
import { ROUTE_PATH_INDEX, ROUTE_PATH_RESULT } from "@constants/routes";
import Footer from "@components/Footer";
import Loader from "@components/Loader";
import "./style.css";
import GlobalStyle from "./GlobalStyle";

const Home = lazy(() => import("@pages/Home"));
const Result = lazy(() => import("@pages/Result"));

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Loader isLoading />}>
        <Switch>
          <Route path={ROUTE_PATH_INDEX} component={Home} />
          <QueryClientProvider client={queryClient}>
            <Route path={ROUTE_PATH_RESULT} component={Result} />
          </QueryClientProvider>
          <Route>Not Found</Route>
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
