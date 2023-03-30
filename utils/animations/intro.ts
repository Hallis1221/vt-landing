import { Variants } from "framer-motion";

class NavbarAnimator {
    stroke: Variants;
    fill: Variants;
    parent: Variants;
    grandparent: Variants;
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

  class NavbarAnimatorSmall extends NavbarAnimator {
    constructor() {
      super();
      this.parent = {
        hidden: {
          width: "100%",
          maxWidth: "1000px",
        },
        show: {
          width: "25%",
          transition: {
            duration: 2,
            delay: 2,
            ease: "linear",
          },
        },
      };
    }
  }

    export { NavbarAnimator, NavbarAnimatorSmall };