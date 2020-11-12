import {
    createContext,
    useContext,
    useReducer
} from 'react';

const defaultGlobalState = {
    myFavorites: [],
    setFavoriteState: () => {}
};

const globalStateContext = createContext(defaultGlobalState);
const dispatchStateContext = createContext(undefined);

const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
      (state, newValue) => ({ ...state, ...newValue }),
      defaultGlobalState
    );
    return (
      <globalStateContext.Provider value={state}>
        <dispatchStateContext.Provider value={dispatch}>
          {children}
        </dispatchStateContext.Provider>
      </globalStateContext.Provider>
    );
};

export const useGlobalState = () => [
    useContext(globalStateContext),
    useContext(dispatchStateContext)
];

export default GlobalStateProvider;