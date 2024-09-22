import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const transitionVariants = {
  initial: {
    x: "100%",
    with: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

// calculate the reverse index for staggred delay
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

function Stairs() {
  return (
    // render divs motion
    <>
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="h-full w-full bg-slate-800 relative z-30"
      />
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.4,
        }}
        className="h-full w-full bg-slate-500 relative z-20"
      />
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.6,
        }}
        className="h-full w-full bg-slate-300 relative z-10"
      />
    </>
  );
}

export default Stairs;
// function Stairs() {
//   return (
//     // render divs motion
//     <>

//     {[...Array(6)].map((_, index) => (
//         <motion.div key={index} variants={stairAnimation}
//         initial= "initial" animate="animate" exit="exit"
//         transition={{
//             duration: 0.4,
//             ease: "easeInOut",
//             delay: reverseIndex(index) * 0.1,
//         }}
//         className="h-full w-full bg-slate-800 relative"
//         />

//     ))}
//     </>
//   )
// }

// export default Stairs
