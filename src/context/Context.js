// import { createContext, useEffect, useReducer } from 'react';
// import Reducer from './Reducer';

// const INITIAL_STATE = {
//   sessionToken: JSON.parse(localStorage.getItem('sessionToken')) || null,
//   error: null,
// };

// export const ContextUser = createContext(INITIAL_STATE);

// export const ContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

//   useEffect(() => {
//     localStorage.setItem('sessionToken', JSON.stringify(state.sessionToken));
//   }, [state.sessionToken]);

//   return (
//     <ContextUser.Provider
//       value={{
//         sessionToken: state.sessionToken,
//         error: null,
//         dispatch,
//       }}
//     >
//       {children}
//     </ContextUser.Provider>
//   );
// };
