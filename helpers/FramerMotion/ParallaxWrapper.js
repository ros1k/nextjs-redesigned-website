import  React,{useEffect} from "react";
import { useState, useRef, useLayoutEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";




const ParallaxWrapper = ({children, customNumbers, setZindex ,src, ...style }) => {
  const [parallaxValues, setParallaxValues] = useState([0.3, -0.1])
  const [elementZindex,setElementZindex] = useState(1)
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 2], parallaxValues, {
    clamp: false
  });
  
  useEffect(() => {
    const element = ref.current;
    if(customNumbers){
      setParallaxValues(customNumbers)
     
    }
    if(setZindex){
      setElementZindex(setZindex)
      
    }
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <div ref={ref} style={{zIndex:elementZindex}}>
      <motion.div className="overlay" style={{ ...style, y ,zIndex:elementZindex}} >
        {children}

      </motion.div>
    </div>
  );
};

export default ParallaxWrapper