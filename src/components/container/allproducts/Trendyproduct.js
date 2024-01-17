import React, { useContext, useEffect } from 'react';
import './trendy.css';
import { Link } from 'react-router-dom';
import myContext from '../../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {addToCart} from '../../redux/cartSlice';

const Trendyproduct = () => {
  const context=useContext(myContext)
  const {product} = context
  const dispatch = useDispatch()
  const cartItems = useSelector((state)=>state.cart);
  console.log(cartItems)
 
  const addCart = (product)=>{
    dispatch(addToCart(product));
    toast.success('added to cart');
    }

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cartItems));
  },[cartItems])

  return (
    <>
    <div className="trendyy">
        <h1>New Arrivals</h1>
    </div>
      <div className="container">
        {product.map((item,index,id)=>{
          const {title,price,description,imageurl,category} = item;
          return(
            <div key={index} className="product_row">
              <div className="main_product">
                  <div className="pro_img">
                  <Link to={`/productinfo/${id}`} className='pro-link'>
                   <div className="images">
                      <img src={imageurl} alt="product" />
                   </div>
                   </Link>
                  </div>
                  <div className="cont">
                    <div className="review">
                    <i class="ri-heart-fill"></i>
                    <i class="ri-heart-fill"></i>
                    <i class="ri-heart-fill"></i>
                    <i class="ri-heart-fill"></i>
                    <i class="ri-heart-fill"></i>
                    </div>
                    <div className="pro_desc">
                      <span>{title}</span>
                    </div>
                    <div className="price_shop">               
                      <div className="price">
                      <span>${price}</span>
                    </div>
                    <div className="shop">
                      <button onClick={()=>addCart(item)}><i class="ri-shopping-cart-line"></i></button>
                    </div>
                    </div>
                  </div>
              </div>
          </div>   
            
          )
        })}
      </div>
    </>
  )
}

export default Trendyproduct
