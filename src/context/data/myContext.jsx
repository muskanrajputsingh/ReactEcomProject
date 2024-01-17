import { createContext } from "react";

const myContext=createContext();

export default myContext;

// const myContext = createContext();

// const API = "https://api.pujakaitem.com/api/products";

// const AppProvider = ({ children }) => {
//   const getProducts = async (url) => {
//     const res = await axios.get(url);
//     console.log(
//               "🚀 ~ file: productcontex.js ~ line 10 ~ getProducts ~ res",
//                 res
//              );
//    };
  
//   useEffect(()=>{
//     getProducts(API);
//   },[]);
 
// };

// //CUSTOM HOOKS

//   const useProductContext = ()=>{
//     return useContext(myContext);
//    };



// export default {myContext,AppProvider,useProductContext };

