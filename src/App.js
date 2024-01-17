import './App.css';
import { GlobalStyle } from './GlobalStyle';
import React from 'react';
import { BrowserRouter as Router,Route,Routes,Navigate, createBrowserRouter} from 'react-router-dom';
import Home  from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Order from './pages/order/Order';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import MyState from './context/data/myState';
import Category from './pages/category/Category';
import Contact from './pages/contact/Contact';
import { ThemeProvider } from 'styled-components';
import ErrorPage from './ErrorPage';
import ProductInfo from './components/container/productinfo/ProductInfo';
import Trendyproduct from './components/container/allproducts/Trendyproduct';
import AddProduct from './pages/addup/AddProduct';
import UpdateProduct from './pages/addup/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
   <>
   <MyState> 
    <ThemeProvider theme={theme}> 
    <GlobalStyle /> 
    <Routes>
     <Route exact path='/' Component={Home}  />
     <Route exact path='/order' element = { <ProtectedRoute><Order /></ProtectedRoute> } />
     <Route exact path='/cart' Component={Cart} />
     <Route exact path='/trendyproduct' Component={Trendyproduct} />
     <Route exact path='/dashboard' element={
      <ProtectedRouteForAdmin>
      <Dashboard/>
      </ProtectedRouteForAdmin>
      } />
     <Route exact path='/login' Component={Login} />
     <Route exact path='/signup' Component={Signup} />
     <Route exact path='/category' Component={Category}/>
     <Route exact path='/contact' Component={Contact} />
     <Route exact path='/productinfo/:id' Component={ProductInfo}></Route>
     <Route exact path='/addproduct' element={<ProtectedRouteForAdmin><AddProduct /></ProtectedRouteForAdmin>} />
     <Route exact path='/updateproduct' element={<ProtectedRouteForAdmin><UpdateProduct /></ProtectedRouteForAdmin>} />
     <Route path='*' Component={ErrorPage} />
   </Routes>
   <ToastContainer />
   </ThemeProvider>
   </MyState>
   </>
  );
}

export default App;

//user

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }
  else{
    return <Navigate to={'/login'} />
  }
}


//admin

const ProtectedRouteForAdmin = ({children}) =>{
  const admin = JSON.parse(localStorage.getItem('user'))
  if(admin.user.email === 'muskansingh7105@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'} />
  }
}



/////////////////////////////////////////////////////////////////////////////////
// const router = createBrowserRouter([            in index.js
//   {
//     path:'/',
//     element:<Layout />,
//     children:[
//       {
//         path:'',
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About />
//       }
//     ]
//   }
// ])