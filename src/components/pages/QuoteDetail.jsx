import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { Fragment ,useEffect} from "react";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import classes from "./QuoteDetail.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const {quoteId} = params;

  const {sendRequest,status,data : loadedQuote,error} = useHttp(getSingleQuote,true);

  useEffect(()=>{
    sendRequest(quoteId)
  },[sendRequest,quoteId]);

  if(status==="pending"){
    <div className="centered">
      <LoadingSpinner></LoadingSpinner>
    </div>
  }

  if(error){
    return <p className={classes.error}>No Quote Found</p>
  }

  if (!loadedQuote?.text) {
    return <p className={classes.error}>No Quote Found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
      ></HighlightedQuote>
      <Route path={match.path} exact>
        <div className="centered">
          <button className={classes.button}>
            <Link
              to={`${match.url}/comments`}
              className={classes.navlink}
            >
              View Comments
            </Link>
          </button>
        </div>
      </Route>
      {/* <Route path="/quotes/:quoteId/comments"></Route> */}
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
