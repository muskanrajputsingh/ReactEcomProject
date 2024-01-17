import React, { useEffect, useState } from "react";
import MyContext from "./myContext";
import {QuerySnapshot, Timestamp, addDoc, collection, onSnapshot,query,orderBy, setDoc, deleteDoc,doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../../components/firebase/firebase";


function MyState(props){
   const [loading,setLoading] = useState(false);
   const [products,setProducts]=useState({
    title:null,
    price:null,
    imageurl:null,
    category:null,
    description:null,
    time:Timestamp.now(),
    date:new Date().toLocaleString(
        "en-US",
        {
            month:"short",
            day:"2-digit",
            year:"numeric",
        }
    )
   });

  //add product

  const addProduct = async ()=>{
    if(products.title == null || products.price == null || products.imageurl ==null ||products.category==null||products.description==null){
        return toast.error("all fields are required")
    }
    try{
      const productRef = collection(fireDB,'products');
      await addDoc(productRef,products)
      toast.success("add product successfully");
      setTimeout(()=>{
        window.location.href = '/dashboard'
      },800);
      getProductData();
    }catch(error){
        console.log(error);
    }
  }
 
  //get product
   const [product,setproduct] = useState([]);

   const getProductData = async()=>{
    try{
       const q = query(
        collection(fireDB,'products'),
        orderBy('time')
       );
       const data = onSnapshot(q,(QuerySnapshot)=>{
        let productArray = [];
        QuerySnapshot.forEach((doc)=>{
            productArray.push({...doc.data(),id:doc.id});
        });
        setproduct(productArray)
       });
       return () =>data;
    }catch(error){
       console.log(error)
    }
   }
  
  useEffect(()=>{
    getProductData();
  },[]);

  //update product

 const edithandle = (item)=>{
  setProducts(item)
 }

 const updateProduct = async()=>{
   try{
    await setDoc(doc(fireDB,'products',products.id),products)
    toast.success('product updated successfully');
    setTimeout(()=>{
      window.location.href='/dashboard'
    },800)
    getProductData();
   }catch(error){
    console.log(error)
   }
 }

 //delete product

 const deleteProduct = async(item)=>{
  try{
   await deleteDoc(doc(fireDB,'products',item.id))
   toast.success('product deleted succesfully');
   getProductData();
  }catch(error){
    console.log(error)
  }
 }

    return(
        <MyContext.Provider value={{loading,setLoading,products,setProducts,addProduct,product,edithandle,updateProduct,deleteProduct}}>{props.children}</MyContext.Provider>
    )
}

export default MyState