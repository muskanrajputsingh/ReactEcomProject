import React,{useContext} from 'react';
import './addpro.css';
import myContext from '../../context/data/myContext';

const AddProduct = () => {
  const context = useContext(myContext);
  const {products,setProducts,addProduct}=context;

  return (
    <>
    <div className="box-add">
     <div class="form">
      <div class="title">Welcome Admin</div>
      <div class="subtitle">Add Your Product!</div>
      <div class="input-container ic1">
        <input  class="input" type="text" placeholder=" " value={products.title} onChange={(e)=>setProducts({...products,title:e.target.value})} />
        <div class="cut"></div>
        <label  class="placeholder">Product title</label>
      </div>
      <div class="input-container ic2">
        <input  class="input" type="text" placeholder=" " value={products.price} onChange={(e)=>setProducts({...products,price:e.target.value})} />
        <div class="cut"></div>
        <label class="placeholder">product price</label>
      </div>
      <div class="input-container ic2">
        <input  class="input" type="text" placeholder=" " value={products.imageurl} onChange={(e)=>setProducts({...products,imageurl:e.target.value})} />
        <div class="cut"></div>
        <label class="placeholder">product imageurl</label>
        </div>
        <div class="input-container ic2">
        <input  class="input" type="text" placeholder=" " value={products.category} onChange={(e)=>setProducts({...products,category:e.target.value})} />
        <div class="cut"></div>
        <label  class="placeholder">product category</label>
        </div>
        <div class="input-container ic2">
        <input  class="input" type="text" placeholder=" " value={products.description} onChange={(e)=>setProducts({...products,description:e.target.value})}/>
        <div class="cut"></div>
        <label class="placeholder">product description </label>
        </div>
      <button type="text" class="submit" onClick={addProduct}>Add Product</button>
    </div>
    </div>
    </>
  )
}
export default AddProduct