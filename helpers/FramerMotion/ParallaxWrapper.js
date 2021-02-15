import * as React from "react";
import { useState, useRef, useLayoutEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";




const ParallaxWrapper = ({children, customNumbers, src, ...style }) => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 2], customNumbers, {
    clamp: false
  });

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <div ref={ref}>
      <motion.div className="overlay" style={{ ...style, y }} >
        {children}

      </motion.div>
    </div>
  );
};

export default ParallaxWrapper