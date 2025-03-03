import { useReducer } from "react";
import AppContext from "./AppContext";

const initialState = {
    navMenuVisible: false,
    addButtonsVisible: false,
    selectedLocation: "Kopli",
}

function appReducer(state, action) {
    switch (action.type) {
        case "switchNavMenu":
          return { ...state, navMenuVisible: action.payload };
        case "switchAddButtons":
          console.log(action.payload);
          return { ...state, addButtonsVisible: action.payload };
        default:
          throw new Error("Unknown action type: " + action.type);
  }
}

const AppProvider = ({ children }) => {
  const [app, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ app, dispatch }}>
      {children}
    </AppContext.Provider>
  )
};

export default AppProvider;