import { useReducer, createContext } from "react";

const INITIAL_STATE = {
  city1: undefined,
  city2: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
  // console.log("Hi this is dispatch console log",dispatch)
 
  return(<SearchContext.Provider
    value={{
      city1: state.city1,
      city2: state.city2,
      dates: state.dates,
      options: state.options,
      dispatch,
    }}
  >
    {children}
  </SearchContext.Provider>)
};
