import { useReducer } from "react";
import { createContext } from "use-context-selector";

export const AuthContext = createContext();

const changeState = (state, action) => {
  {
    const { type, payload } = action;
  }
};

export const AuthContextProvider = ({ children }) => {
  const initialState = {
    user: { role: "student" },
  };

  const [state, dispatch] = useReducer(changeState, initialState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
