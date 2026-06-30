"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Display splash screen for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={splashStyle}
        >
          <div style={carContainerStyle}>
            {/* Animated Car SVG */}
            <motion.div
              initial={{ x: "-50vw", opacity: 0 }}
              animate={{ x: "50vw", opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <svg 
                width="150" 
                height="60" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="var(--accent-cyan)" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))' }}
              >
                <path d="M14 16H9m10 0h3v-3.15a1 1 0 00-.84-.99L16 11l-2.7-3.6a1 1 0 00-.8-.4H8.3a1 1 0 00-.89.55L4 12H2v4h2m15 0a2 2 0 11-4 0m-8 0a2 2 0 11-4 0" />
              </svg>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={textStyle}
          >
            <span className="text-gradient">Initializing Environment...</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const splashStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "var(--bg-primary)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  overflow: "hidden",
};

const carContainerStyle: React.CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

const textStyle: React.CSSProperties = {
  marginTop: "20px",
  fontFamily: "var(--font-geist-mono)",
  fontSize: "1.2rem",
  fontWeight: 600,
  letterSpacing: "3px",
  textTransform: "uppercase",
};
