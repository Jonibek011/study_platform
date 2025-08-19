import { useReducer } from "react";
import { createContext } from "use-context-selector";

const MainContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;
};

export const GlobalContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {
    value: 0,
  });
  return (
    <MainContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};
