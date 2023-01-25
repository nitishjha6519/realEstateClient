// import React, { useContext, useState, useEffect, createContext } from "react";

// const APIContext = createContext();

// export function APIContextProvider({ children }) {
//   const token = window.localStorage.getItem("token");
//   const [details, setDetails] = useState([]);

//   useEffect(() => {
//     const fetchdata = async () => {
//       await fetch("http://127.0.0.1:5000/property/propertydetails", {
//         method: "GET",

//         headers: {
//           Authorization: `random ${token}`,
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data, "details");
//           setDetails(data?.allData);
//         });
//     };
//     fetchdata();
//     // eslint-disable-next-line
//   }, [setDetails]);
//   return (
//     <APIContext.Provider
//       value={{
//         details: details,
//       }}
//     >
//       {children}
//     </APIContext.Provider>
//   );
// }

// export function useAPI() {
//   const context = useContext(APIContext);
//   console.log("context" + context);
//   if (context === undefined) {
//     throw new Error("Context must be used within a Provider");
//   }

//   return context;
// }
