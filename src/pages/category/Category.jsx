import React from 'react'

const Category = () => {
  return (
    <>
      <h1 className='text-center text-info'>Let's Shop</h1>
      <div className="container-fluid mx-2">
      <div className="row mt-5 mx-2">
       <div className="col-md-3">
        <button className="btn btn-warning w-100">Men</button>
        <button className="btn btn-warning w-100">women</button>
        <button className="btn btn-warning w-100">Men</button>

       </div>
       {/* <div className="col-md-9">

       </div> */}
      </div>
      </div>
    </>
  )
}

export default Category
