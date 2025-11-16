import { motion } from "framer-motion";

export default function AnimatedSection({
  id,
  className = "",
  children,
  delay = 0,
}) {
  return (
    <motion.section
      id={id}
      className={`${className} scroll-mt-28`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.section>
  );
}
