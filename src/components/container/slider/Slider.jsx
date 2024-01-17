import React from 'react';
import './slider.css';
import {motion} from "framer-motion";
import {useRef ,useEffect,useState} from 'react';
import { craousel2 } from './sliderdata';

const Slider = ({image2}) => {
    const [width,setWidth] = useState(0);
    const carousell = useRef();

 useEffect(()=>{
    setWidth(carousell.current.scrollWidth - carousell.current.offsetWidth);
 },[]);

  return (
    <>
    <div id='a'>
    <motion.div ref={carousell} className='carousell' whileTap={{cursor:"grabbing"}}>
      <motion.div  drag="x"  dragConstraints={{right:0, left: - width}}  className='inner-carousell'>
        { image2.map((image,index)=>{
            return(              
                    <motion.div className='item' key={index}>
                    <img src={image.image} alt="imgs" />
                </motion.div>

            )
        })}
      </motion.div>
    </motion.div>
    </div>
    </>
  );
}

export default Slider
