import { useReducer } from "react";
import { createContext } from "use-context-selector";

export const TeacherContext = createContext();

const changeState = (state, action) => {
  {
    const { type, payload } = action;
  }
};

export const TeacherContextProvider = ({ children }) => {
  const initialState = {
    teacher: null,
  };

  const [state, dispatch] = useReducer(changeState, initialState);

  return (
    <TeacherContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TeacherContext.Provider>
  );
};
