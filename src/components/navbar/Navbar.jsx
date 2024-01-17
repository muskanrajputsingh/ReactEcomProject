import { Link,NavLink,Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [show,setShow]=useState(true);
  const user = JSON.parse(localStorage.getItem('user'));
  
  const logout=()=>{
    localStorage.clear('user');
    window.location.href ='/login'
  }

  const cartItems = useSelector((state)=> state.cart)
  
 const Menu=()=>{
   setShow(false);
  }
  return (
    <>
     <div className="navbar">
        <div className="logo">
        <img src="https://a.espncdn.com/i/teamlogos/nhl/500-dark/phi.png" alt='logo' />
        </div>
       { show? <div className="links" id="menu">
       <button className='log-btn w'><i class="ri-close-line toggle"  onClick={Menu}></i></button>
       <Link to={'/'} className='link'>Home</Link>
       <Link to={'/trendyproduct'} className='link'>products</Link>
       <Link to={'/category'} className='link'>categories</Link>
       {user?.user?.email ==='muskansingh7105@gmail.com' ?
        <Link to={'/dashboard'} className='link'>Admin</Link>:""}
       {/* {user?<Link to={'/order'} className='link'>Orders</Link>:''} */}
       <Link to={'/order'} className='link'>Orders</Link>
       {/*</NavLink> */}

        <div className='log'>
        <Link to={'/login'} className='link'><button id='log1'>Login</button></Link>
        {user ? <Link  className='link'><button id='log1' onClick={logout}>Logout</button></Link> : " "}
       {/* <Link to={'/signup'} className='link'><button id='log2'>signup</button></Link> */}
       </div>
       </div> :null}

       <div className="action">
       <div className='icobtn'>
        <button className='search-btn'><i class="ri-search-line"></i></button>
        <button className='log-btn'><Link className='d' to={'/contact'}><i class="ri-phone-line"></i></Link></button>
        <button className='cart cart-trolley--link'><Link className='d' to={'/cart'}><i class="ri-shopping-cart-line cart-trolley"></i></Link></button>
        <span className='cart-total--item'>{cartItems.length}</span>
        <button className='toggle_btn'><i class="ri-menu-2-line toggle" onClick={()=>setShow(true)}></i></button>
        </div>
       <div className='log1'>
        <Link to={'/login'} className='link'><button id='log1'>Login</button></Link>
       {user ? <Link  className='link'><button onClick={logout} id='log1'>Logout</button></Link> :""}
        {/* <Link to={'/signup'} className='link'><button id='log2'>signup</button></Link> */}
      </div>
      
        </div>
     </div>
    </>
  )
}

export default Navbar

