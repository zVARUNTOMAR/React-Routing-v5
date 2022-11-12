import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes></AllQuotes>
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote></NewQuote>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
