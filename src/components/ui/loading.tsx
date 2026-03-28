"use client";

import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        className="w-12 h-12 border-4 border-zinc-200 dark:border-zinc-700 border-t-zinc-900 dark:border-t-zinc-100 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="bg-zinc-200 dark:bg-zinc-700 rounded-lg h-48 mb-4" />
      <div className="bg-zinc-200 dark:bg-zinc-700 h-6 rounded mb-2 w-3/4" />
      <div className="bg-zinc-200 dark:bg-zinc-700 h-4 rounded w-1/2" />
    </div>
  );
}

export function PageLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <LoadingSpinner />
    </div>
  );
}
