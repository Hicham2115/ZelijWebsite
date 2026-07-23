"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CREAM, TERRACOTTA } from "@/lib/theme";

const EASE = [0.22, 1, 0.36, 1] as const;
const MIN_DISPLAY_MS = 700;

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const remaining = Math.max(MIN_DISPLAY_MS - (Date.now() - start), 0);
      window.setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
      return;
    }
    window.addEventListener("load", finish);
    return () => window.removeEventListener("load", finish);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ backgroundColor: CREAM }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center gap-5"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-serif text-3xl tracking-[0.3em] text-neutral-900"
          >
            ARTE PIEDRA
          </motion.span>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            style={{ backgroundColor: TERRACOTTA }}
            className="h-px"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
