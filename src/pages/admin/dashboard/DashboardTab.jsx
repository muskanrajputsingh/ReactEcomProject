import React, { useContext, useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import myContext from '../../../context/data/myContext';
import { Link } from 'react-router-dom';
import './dashboard.css';


const DashboardTab = () => {
    const context= useContext(myContext)
    const {product,edithandle,deleteProduct}=context

    const add=()=>{
        window.location.href ='/addproduct' ;
    }

  return (
    <>
       <div className="container-dash">
        <div className="box-dash">
            <Tabs defaultIndex={0} >
                <TabList className='box-tab'>
                    <Tab>
                      <div className="product">
                        <div className="pro">Product</div>

                        <i class="ri-product-hunt-fill"></i>
                      </div>
                    </Tab>
    
                    <Tab>
                      <div className="order">
                      <div className="pro">Order</div>

                      <i class="ri-apps-fill"></i>
                      </div>
                    </Tab>
    
                    <Tab>
                      <div className="user">
                        <div className="pro">Users</div>
                        <i class="ri-user-fill"></i>
                      </div>
                    </Tab>
                </TabList>
         
                       <TabPanel >
                            <div className='  px-4 md:px-0 mb-16'>
                                <h3 className=' text-center pro-det'>Product Details</h3>
                          <div className="add-bt" onClick={add}>
                            <div className="bt">Add Product</div>
                          </div>
                          <div className="tabl">
                            <table>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                      </tr>
                                </thead>

                                        {product.map((item,index)=>{
                                            const {title,price,imageurl,category,description,date}=item;
                                            return(
                                                <tbody className=''>
                                            <tr className="bg-gray-50 border-b  dark:border-gray-700">
                                                <td className="px-6 py-4 text-black ">
                                                    {index + 1}.
                                                </td>
                                                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                                    <img className='imagee' src={imageurl} alt="img" />
                                                </th>
                                                <td className="px-6 py-4 text-black ">
                                                    {title}
                                                </td>
                                                <td className="px-6 py-4 text-black " >
                                                    {price}
                                                </td>
                                                <td className="px-6 py-4 text-black ">
                                                    {category}
                                                </td>
                                                <td className="px-6 py-4 text-black ">
                                                    {description}
                                                </td>
                                                <td className="px-6 py-4 text-black ">
                                                    {date}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className=" flex gap-2">
                                                        <div className=" flex gap-2 cursor-pointer text-black sv-2">
                                                            <div onClick={()=>deleteProduct(item)} >
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="widh">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                </svg>
                                                            </div>
                                                            <Link to={'/updateproduct'}>
                                                            <div onClick={()=>edithandle(item)} >
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="widh">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                </svg>
                                                            </div>
                                                            </Link>
                                                            
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                         )
                                        })} 
                                    </table>

                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            {/* <Order order={order} setOrder={setOrder} setLoading={setLoading} /> */}
                            <div className="relative overflow-x-auto mb-16">
                                <h3 className=' text-center mb-5 text-3xl font-semibold underline pro-det'>Order Details</h3>
                                <div className="tabl">
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 " >
                                            <thead  className="text-xs text-black uppercase bg-gray-200 " >
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                        Payment Id
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Image
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Title
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Price
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Category
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Name
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Address
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Pincode
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Phone Number
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Email
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Date
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               
                                                        <tr className="bg-gray-50 border-b  dark:border-gray-700">
                                                            <td className="px-6 py-4 text-black ">
                                                               3393939
                                                            </td>
                                                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                                                <img className='img-ord' src="" alt="img"/>
                                                            </th>
                                                            <td className="px-6 py-4 text-black ">
                                                                Title
                                                            </td>
                                                            <td className="px-6 py-4 text-black ">
                                                                ₹100
                                                            </td>
                                                            <td className="px-6 py-4 text-black ">
                                                                pots
                                                            </td>
                                                          
                                                            <td className="px-6 py-4 text-black ">
                                                                name
                                                            </td>
                                                            <td className="px-6 py-4 text-black ">
                                                                india
                                                            </td>
                                                            <td className="px-6 py-4 text-black ">
                                                                82828
                                                            </td>
                                                            <td className="px-6 py-4 text-black ">
                                                               929929929929
                                                            </td>
                                                            <td className="px-6 py-4 text-black ">
                                                                kkakka@gmail.com
                                                            </td>
                                                            <td className="px-6 py-4 text-black ">
                                                               12 Aug 2019
                                                            </td>

                                                        </tr>
                                                
                                            </tbody>
                                        </table>
                                        </div>
                                 
                            </div>
                        </TabPanel>
                        <TabPanel>
                            {/* <User addressInfo={addressInfo} setAddressInfo={setAddressInfo} setLoading={setLoading} /> */}
                            <div className="relative overflow-x-auto mb-10">
                                <h3 className=' text-center  pro-det'>User Details</h3>
                                <div className="tabl">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 tabl">
                                    <thead className="text-xs text-black uppercase bg-gray-200 "  >
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                S.No
                                            </th>

                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Address
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Pincode
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Phone Number
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      
                                                <tr className="bg-gray-50 border-b  dark:border-gray-700"  >
                                                    <td className="px-6 py-4 text-black ">
                                                        1.
                                                    </td>
                                                    <td className="px-6 py-4 text-black ">
                                                        Name
                                                    </td>
                                                    <td className="px-6 py-4 text-black ">
                                                        Address
                                                    </td>
                                                    <td className="px-6 py-4 text-black ">
                                                        181919
                                                    </td>
                                                    <td className="px-6 py-4 text-black ">
                                                        1991818818
                                                    </td>
                                                    <td className="px-6 py-4 text-black ">
                                                       kkk@gmail.com
                                                    </td>
                                                    <td className="px-6 py-4 text-black ">
                                                        12 Aug 2019
                                                    </td>

                                                </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </TabPanel>

            
         </Tabs>
        </div>
       </div>
    </>
  )
}

export default DashboardTab
