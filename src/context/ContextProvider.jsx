// import { createContext, useContext, useState } from "react";

// // Define the initial context
// const StateContext = createContext({
//     user: null,
//     setUser: () => {},
//     token: null,
//     setToken: () => {}
// });

// // Define the ContextProvider
// export const ContextProvider = ({ children }) => {
//     const [user, setUser] = useState({});
//     const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

//     const setToken = (token) => {
//         _setToken(token);
//         if (token) {
//             localStorage.setItem('ACCESS_TOKEN', token);
//         } else {
//             localStorage.removeItem('ACCESS_TOKEN');
//         }
//     };

//     return (
//         <StateContext.Provider value={{ user, setUser, token, setToken }}>
//             {children}
//         </StateContext.Provider>
//     );
// };

// // Custom hook to use the StateContext
// export const useStateContext = () => useContext(StateContext);