import QuoteList from "../quotes/QuoteList";
const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Varun",
    text: "Learning React is Fun",
  },

  { id: "q2", author: "Max", text: "Learnign React is great" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};
export default AllQuotes;
