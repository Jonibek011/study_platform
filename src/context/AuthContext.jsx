import { useReducer } from "react";
import { createContext } from "use-context-selector";

export const AuthContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "PHONE":
      return { ...state, phoneNumber: payload };
  }
};

export const AuthContextProvider = ({ children }) => {
  const initialState = {
    user: { role: "teacher", displayName: "Anvar A." },
    // user: true,
    phoneNumber: null,
  };

  const [state, dispatch] = useReducer(changeState, initialState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
