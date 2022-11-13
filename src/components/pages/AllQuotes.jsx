import QuoteList from "../quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    console.log(loadedQuotes);
    return <NoQuotesFound />;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  return <QuoteList quotes={loadedQuotes} />;
};
export default AllQuotes;
