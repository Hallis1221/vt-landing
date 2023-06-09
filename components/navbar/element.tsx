import { motion } from "framer-motion";

export default
function NavbarElement({
    text,
    link,
    delay,
    animate,
  }: {
    text: string;
    link: string;
    delay: number;
    animate?: boolean | undefined;
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
        animate={animate === undefined ? "show" : animate ? "show" : "hidden"}
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

  
  export 
function HamburgerElement({
  text,
  link,
  delay,
  animate,
}: {
  text: string;
  link: string;
  delay: number;
  animate?: boolean | undefined;
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
      animate={animate === undefined ? "show" : animate ? "show" : "hidden"}
      whileHover="hover"
      className="text-[#3d2f33] text-[3rem] font-bold h-screen "
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

