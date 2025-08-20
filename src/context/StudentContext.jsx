import { useReducer } from "react";
import { createContext } from "use-context-selector";

export const StudentContext = createContext();

const changeState = (state, action) => {
  {
    const { type, payload } = action;
  }
};

export const StudentContextProvider = ({ children }) => {
  const initialState = {
    user: null,
  };

  const [state, dispatch] = useReducer(changeState, initialState);

  return (
    <StudentContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};
