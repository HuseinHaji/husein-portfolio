import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={handleClick}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 rounded-lg border-2 border-accent bg-surface/90 px-3 py-2 text-xs sm:text-sm text-accent font-medium shadow-sm hover:bg-surface hover:border-accent-hover transition-colors z-40 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          aria-label="Back to top"
        >
          ↑ Top
        </motion.button>
      )}
    </AnimatePresence>
  );
}
