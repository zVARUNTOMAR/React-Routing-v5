import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, isAsc) => {
  return quotes.sort((a, b) => {
    if (isAsc) {
      return a.id > b.id ? 1 : -1;
    } else {
      return a.id < b.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAsc = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAsc);

  const changingSortingHandler = () => {

    history.push({
      pathname : location.pathname,
      search : `?sort=${(isSortingAsc ? 'desc' : 'asc')}`
    });


    // history.push("/quotes?sort=" + (isSortingAsc ? "desc" : "asc"));
    // console.log(location);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changingSortingHandler}>
          Sort {isSortingAsc ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {isSortingAsc
          ? sortedQuotes.map((quote) => (
              <QuoteItem
                key={quote.id}
                id={quote.id}
                author={quote.author}
                text={quote.text}
              />
            ))
          : sortedQuotes.map((quote) => (
              <QuoteItem
                key={quote.id}
                id={quote.id}
                author={quote.author}
                text={quote.text}
              />
            ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
