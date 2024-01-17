import React from 'react';
import './product.css';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <>
    <div className="trendy">
        <h1>Latest Products</h1>
    </div>
    <div className="container">
    <div className="center">
        <div className="card">
            <img src="https://images.pexels.com/photos/16904693/pexels-photo-16904693/free-photo-of-woman-posing-in-pink-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product" />
            <div className="card-title">
                <h3>product name</h3>
            </div>
            <div className="card-details">
                <button>buy</button>
                <button>cart</button>
                <div className="details">
                    <h1>product name</h1>
                    {/* <p>product description</p> */}
                    <h2>price<span> $80</span></h2>
                </div>
            </div>
        </div>
    </div>
    <div className="center">
        <div className="card">
            <img src="https://images.pexels.com/photos/16017594/pexels-photo-16017594/free-photo-of-portrait-of-smiling-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product" />
            <div className="card-title">
                <h3>product name</h3>
            </div>
            <div className="card-details">
                <button>buy</button>
                <button>cart</button>
                <div className="details">
                    <h1>product name</h1>
                    {/* <p>product description</p> */}
                    <h2>price<span> $80</span></h2>
                </div>
            </div>
        </div>
    </div>
    <div className="center">
        <div className="card">
            <img src="https://images.pexels.com/photos/12223289/pexels-photo-12223289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product" />
            <div className="card-title">
                <h3>product name</h3>
            </div>
            <div className="card-details">
                <button>buy</button>
                <button>cart</button>
                <div className="details">
                    <h1>product name</h1>
                    {/* <p>product description</p> */}
                    <h2>price<span> $80</span></h2>
                </div>
            </div>
        </div>
    </div>
    
   </div>
   <br/>
   <br />
    </>
  )
}

export default Product
