import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import {Link} from 'react-router-dom';
import './cart.css';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../components/redux/cartSlice';
import { toast } from 'react-toastify';

const Cart = () => {

  const context = useContext(myContext)
  const cartItems = useSelector((state)=>state.cart);
  console.log(cartItems)

  const dispatch = useDispatch() 

  const deleteCart = (item)=>{
    dispatch(deleteFromCart(item));
    toast.success('delete cart');
  }

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cartItems));
  },[cartItems])
   
  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
    let temp=0;
    cartItems.forEach((cartItem)=>{
      temp = temp+parseInt(cartItem.price)
    })
    setTotalAmount(temp);
    console.log(temp)
  },[cartItems])
 
  const shipping = parseInt(100);
  const grandTotal = shipping + totalAmount;
  console.log('grandTotal');

  return(
    <Layout>
      <div className="container-cart">
        {cartItems.map((item,index)=>{
          const {title,price,description,imageurl} = item;
          return(
            <div className="dbba1">
            <div className="bothh">
            <div className="img-dbba">
              <img src={imageurl} alt="img" />
            </div>
            <div className="tit-dbba">
              <h3>{title}</h3>
              <p>{description}</p>
              <p>{price}</p>
            </div>
            </div>
            <div className="action-dbba">
              <Link ><i onClick={()=>deleteCart(item)} class="ri-delete-bin-line"></i></Link>
              <Link><i class="ri-arrow-right-circle-fill"></i></Link>
            </div>
            </div>
          )
        })}
       
          <div className="dbba2">
            <div className="boxxx">
             <div className="head">
              <h4>subtotal</h4>
              <h4>shipping</h4>
              <hr />
              <h4>Total</h4>
            </div>
            <div className="head-val">
               <h4>{totalAmount}</h4>
               <h4>{shipping}</h4>
               <hr />
               <h3>{grandTotal}</h3>
            </div>
            </div>
            <div className='center-btn'>           
           <Link>buy</Link>
           </div>
        </div>

   </div>
    </Layout>
  )
}
export default Cart;