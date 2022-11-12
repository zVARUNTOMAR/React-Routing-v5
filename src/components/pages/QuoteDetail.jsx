import { useParams,Route } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../comments/Comments"
import HighlightedQuote from "../quotes/HighlightedQuote";
import classes from "./QuoteDetail.module.css";

const QuoteDetail = () => {
  const params = useParams();
  const DUMMY_QUOTES = [
    {
      id: "q1",
      author: "Varun",
      text: "Learning React is Fun",
    },
  
    { id: "q2", author: "Max", text: "Learnign React is great" },
  ];

  const quote = DUMMY_QUOTES.find((quote)=>quote.id===params.quoteId);

  if(!quote){
    return <p className={classes.error}>No Quote Found!</p>
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
      {/* <Route path="/quotes/:quoteId/comments"></Route> */}
      <Route path={`/quotes/${params.quoteId}/comments`}>
          <Comments></Comments>
      </Route>
    </Fragment>
  )
};
export default QuoteDetail;
