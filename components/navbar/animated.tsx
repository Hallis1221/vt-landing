import { NavbarAnimator, NavbarAnimatorSmall } from "@/utils/animations/intro";
import { useMediaQuery } from "@/utils/hooks/size";
import { motion } from "framer-motion";
import NavbarElement from "./element";

function AnimatedNavbar({ children }: { children: React.ReactNode }) {
    const needsDrawer = useMediaQuery("(max-width: 480px)");

    const logoDrawer = needsDrawer ? new NavbarAnimatorSmall() : new NavbarAnimator();
  
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
            <nav className="hidden md:flex flex-row justify-evenly items-center flex-grow h-[10%]  ">
              <NavbarElement text="Home" link="/" delay={4} />
              <NavbarElement text="About" link="/about" delay={4.5} />
              <NavbarElement text="Projects" link="/projects" delay={5} />
            </nav>
            <div className="hidden md:block w-[10%] h-[10%]" />
            <nav className="hidden md:flex flex-row justify-evenly items-center flex-grow h-[10%] ">
              <NavbarElement text="Contact" link="/contact" delay={5.5} />
              <NavbarElement text="Resume" link="/resume" delay={6} />
              <NavbarElement text="Blog" link="/blog" delay={6.5} />
            </nav>
          </div>
  
          <div className="w-full flex justify-center items-center">
            <motion.div
              variants={ logoDrawer.parent}
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

export default AnimatedNavbar;