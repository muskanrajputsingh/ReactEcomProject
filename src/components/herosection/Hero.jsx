import React, { useEffect, useState } from 'react'
import './hero.css' ;
// import ReactPlayer from 'react-player';


const Hero = ({images}) => {
  const [current,setCurrent]=useState(0);
  const [autoPlay,setAutoPlay]= useState(true);
  let timeOut=null;

  // useEffect(()=>{
  //   setTimeout(() => {
  //     slideRight();
  //   }, 2500);
  // })
  useEffect(()=>{
    timeOut=autoPlay &&
    setTimeout(() => {
      slideRight();
    }, 2500);
  })

  const slideRight=()=>{
    setCurrent(current === images.length -1 ? 0 :current + 1)
  //   if(current === images.length - 1){
  //   setCurrent(0);
  // }
  // else{
  //   setCurrent(current + 1);
  // }
  };
  const slideLeft=()=>{
    setCurrent(current === 0 ? images.length -1 :current - 1);
  }
  return (
    <>

      <div className='Appp'>
      <div className='carousel' onMouseEnter={()=>{setAutoPlay(false);clearTimeout(timeOut);}} onMouseLeave={()=>{setAutoPlay(true);}}>
        <div className='carousel_wrapper'>
          {images.map((image,index)=>{
            return(
              <div key={index} className={index == current ? "carousel_card carousel_card-active" : "carousel_card"}>
                <img className='card_image' src={image.image} alt="crousel" />
                <div className='card_overlay'>
                 <h2 className='card_title'></h2>
                </div>
                </div>
            );
          })}
          <div className='carousel_arrow_left' onClick={slideLeft}>&lsaquo;</div>
          <div className='carousel_arrow_right' onClick={slideRight}>&rsaquo;</div>
        </div>
      </div>
      </div>
      {/* <div id="main">
      <div id="page1">
        <h1>going </h1>
        <h1>with trend</h1>
      </div>
      </div> */}
     </>
  )
}

export default Hero ;