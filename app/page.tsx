"use client";

import { AnimationProps, Variants, motion, useAnimation } from "framer-motion";
import { Raleway } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import { findDOMNode } from "react-dom";

const raleway = Raleway({ subsets: ["latin"] });

// The logo is made out of two polygons. A V and a T.

class NavbarAnimator {
  stroke: Variants;
  fill: Variants;
  parent: Variants;
  grandparent: Variants;
  sibling: Variants;
  contentParent: Variants;

  constructor() {
    this.stroke = {
      hidden: {
        pathLength: 0,
        stroke: "rgba(0, 0, 0, 0)",
        opacity: 0,
      },

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
        stroke: "rgba(61, 47, 51, 1)",
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
        },
      },
    };

    this.parent = {
      hidden: {
        width: "100%",
        maxWidth: "1000px",
      },
      show: {
        width: "10%",
        transition: {
          duration: 2,
          delay: 2,
          ease: "linear",
        },
      },
    };

   

    this.sibling = {
      hidden: {
        height: "300px",
      },
      show: {
        height: "10px",
        transition: {
          duration: 1,
          delay: 3,
          ease: "linear",
        },
      },
    };

    this.contentParent = {
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          duration: 1,
          delay: 8,
          ease: "linear",
        },
      },
    };
  }
}

export default function Home() {
  return (
    <>
      <div className={raleway.className}>
        <AnimatedNavbar>
          <h1>ss</h1>
        </AnimatedNavbar>
      </div>
    </>
  );
}

function AnimatedNavbar({ children }: { children: React.ReactNode }) {
  const logoDrawer = new NavbarAnimator();

  return (
    <motion.div
      className=" w-screen h-screen flex-col absolute top-0 left-0 right-0 bottom-0 overflow-hidden "
      initial="hidden"
      animate="show"
      variants={logoDrawer.grandparent}
    >
      <motion.div
        className={` w-screen`}
        variants={logoDrawer.sibling}
        initial="hidden"
        animate="show"
      />

      <motion.div

        initial="hidden"
        animate="show"
        id="logo"
        className="flex-row justify-end items-center w-screen h-[10%]"
      >
        <div className="absolute h-full w-full px-[2%] flex justify-between">
          <nav className="flex flex-row justify-evenly items-center flex-grow h-[10%] ">
            <NavbarElement text="Home" link="/" delay={4} />
            <NavbarElement text="About" link="/about" delay={4.5} />
            <NavbarElement text="Projects" link="/projects" delay={5} />
          </nav>
          <div className="w-[10%] h-[10%]" />
          <nav className="flex flex-row justify-evenly items-center flex-grow h-[10%] ">
            <NavbarElement text="Contact" link="/contact" delay={5.5} />
            <NavbarElement text="Resume" link="/resume" delay={6} />
            <NavbarElement text="Blog" link="/blog" delay={6.5} />
          </nav>
        </div>

        <div className="w-full flex justify-center items-center">
          <motion.div
            variants={logoDrawer.parent}
            initial="hidden"
            animate="show"
            id="logo"
            className="z-10"
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
                  whileTap={{
                    scale: 0.9,
                    y: 5,
                  }}
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
                  whileTap={{
                    scale: 0.9,
                    y: 5,
                  }}
                />
              </motion.g>
            </motion.svg>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        variants={logoDrawer.contentParent}
        initial="hidden"
        animate="show"
        className="flex-grow z-10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function NavbarElement({
  text,
  link,
  delay,
}: {
  text: string;
  link: string;
  delay: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
          transition: {
            duration: 1,
            delay: delay,
            ease: [1, 0.5, 0.75, 1],
          },
        },
        hover: {
          scale: 1.1,
          transition: {
            duration: 0.1,
            ease: "linear",
          },
        },
      }}
      initial="hidden"
      animate="show"
      whileHover="hover"
      className="text-[#3d2f33] text-[1.5rem] font-bold"
    >
      <motion.a
        href={link}
        whileHover={{
          opacity: 0.75,
          transition: {
            duration: 0.1,
            ease: "linear",
          },
        }}
      >
        {text}
      </motion.a>
    </motion.div>
  );
}
