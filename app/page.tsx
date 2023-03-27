"use client";

import { AnimationProps, Variants, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { findDOMNode } from "react-dom";

// The logo is made out of two polygons. A V and a T.

class LogoDrawer {
  stroke: Variants;
  fill: Variants;
  parent: Variants;
  grandparent: Variants;
  sibling: Variants;

  constructor() {
    this.stroke = {
      hidden: { pathLength: 0, stroke: "rgba(0, 0, 0, 0)", opacity: 0 },

      show: {
        opacity: 1,
        pathLength: 1,
        stroke: "rgba(61, 47, 51, 1)",
        transition: {
          duration: 2.5,
          ease: "linear",
          bounce: 0.25,
        },
      },
    };

    this.fill = {
      hidden: { opacity: 0, pathLength: 0 },
      show: {
        pathLength: 1,
        stroke: "rgba(255, 255, 255, 1)",
        opacity: 1,
        transition: {
          duration: 1,
          delay: 2.5,
          ease: "linear",
        },
      },
    };

    this.grandparent = {
      hidden: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        display: "flex",
        alignItems: "center",
      },
      show: {
        display: "flex",
        transition: {
          duration: 1,
          delay: 5,
          bounce: 0.25,

          ease: [1, 0.5, 0.75, 1],
        },
      },
    };

    this.parent = {
      hidden: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: "100%",
        maxWidth: "1000px",
      },
      show: {
        width: "10%",
        transition: {
          duration: 1,
          delay: 3,
          // Move like a cubic bezier curve
          ease: [1, 0.5, 0.75, 1],
        },
      },
    };

    this.sibling = {
      hidden: {
        height: "300px"
      },
      show: {
        height: "10px",
        transition: {
          duration: 1,
          delay: 3,
          ease: [1, 0.5, 0.75, 1],
        },
      },
    };
  }
}

export default function Home() {
  const logoDrawer = new LogoDrawer();
  const [logoHeight, setLogoHeight] = useState(0);

  useEffect(() => {
    let heightPercentage = document.getElementById("logo")?.clientHeight || 0;
    heightPercentage = heightPercentage / window.innerHeight;
    setLogoHeight(heightPercentage * 100);
    console.log(heightPercentage * 100);
  }, []); //empty dependency array so it only runs once at render

  return (
    <>
      <div>
        <motion.div
          className=" w-screen h-screen flex-col absolute top-0 left-0 right-0 bottom-0"
          variants={logoDrawer.grandparent}
          initial="hidden"
          animate="show"
        >
     
            <motion.div
              className={` w-screen`}
              variants={logoDrawer.sibling}
              initial="hidden"
              animate="show"
            />

          <motion.div
            variants={logoDrawer.parent}
            initial="hidden"
            animate="show"
            id="logo"
            
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 350 175"
              className={"flex"}
            >
              <motion.g
                initial="hidden"
                animate="show"
                scale={0.1}
                transform={"translate(-75, -155)"}
              >
                <motion.path
                  d="M 91.583 158.613 141.637 158.604 175.807 266.794 209.493 158.602 259.515 158.613 195.649 323.702 156.048 323.673z"
                  fill="rgba(61, 47, 51, 0)"
                  variants={logoDrawer.stroke}
                  initial="hidden"
                  animate="show"
                />

                <motion.path
                  d="M 91.583 158.613 141.637 158.604 175.807 266.794 209.493 158.602 259.515 158.613 195.649 323.702 156.048 323.673z"
                  fill="rgba(61, 47, 51, 1)"
                  variants={logoDrawer.fill}
                  initial="hidden"
                  animate="show"
                />
              </motion.g>
              <motion.g
                initial="hidden"
                animate="show"
                transform={"translate(180, 0)"}
              >
                <motion.path
                  d="M 56.792 43.186 L 56.803 168.866 L 104.094 168.847 L 104.091 43.163 L 154.133 43.157 L 154.136 3.772 L 22.301 3.746 L 7.046 43.177 L 56.792 43.186 Z"
                  fill="rgba(61, 47, 51, 0)"
                  variants={logoDrawer.stroke}
                  initial="hidden"
                  animate="show"
                />
                <motion.path
                  d="M 56.792 43.186 L 56.803 168.866 L 104.094 168.847 L 104.091 43.163 L 154.133 43.157 L 154.136 3.772 L 22.301 3.746 L 7.046 43.177 L 56.792 43.186 Z"
                  fill="rgba(61, 47, 51, 1)"
                  variants={logoDrawer.fill}
                  initial="hidden"
                  animate="show"
                />
              </motion.g>
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
