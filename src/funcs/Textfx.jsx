import { motion } from "framer-motion";


 function HandwrittenEffect({text=[],delay=0}) {

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each word
      delayChildren: delay,   // Wait a bit before starting
    },
  },
};

const wordVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,             // Starts slightly down
    filter: "blur(8px)", // Starts blurry
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", // Becomes sharp
    transition: { 
      duration: 0.25, 
      ease: "easeOut" 
    },
  },
};

  return (
    <motion.div
      className=" overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Triggers when you scroll to it
      viewport={{ once: true }} // Only happens once
    >
      {text.split(" ").map((word, i) => (
        <motion.span 
            key={i} 
            variants={wordVariants} 
            className="inline-block mr-2" // mr-2 adds the space back
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

export { HandwrittenEffect };