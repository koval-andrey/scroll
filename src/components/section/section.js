import React from "react";
import { useViewportScroll, useTransform, motion } from "framer-motion";
import styles from "./styles.module.css";
import Img from "../../img/japan.jpg";

export default function Section({ offset = 1500 }) {
  // 2.
  const { scrollY } = useViewportScroll();
  // 3.
  const scale = useTransform(scrollY, [0, offset], [1, 5]);
  const opacity = useTransform(scrollY, [0, offset], [3, 0]);
  const moveDown = useTransform(scrollY, [0, offset], [0, -1000]);

  return (
    <>
      <div className={styles.imageContainer}>
        {/* 5. */}
        <motion.img
          src={Img}
          alt="Japan"
          style={{
            opacity: opacity,
            scale: scale,
            y: moveDown,
          }}
        />
      </div>
      {/* 6. */}
      <div style={{ background: '#030303', height: `${offset}px` }}></div>
      <div style={{ background: '#030303', height: '80vh' }}></div>
    </>
  );
}