'use client';

import React from 'react';
import { motion, easeOut } from 'framer-motion';

interface IndexItem {
  id: number;
  title: string;
  index: number; // position in the full sections array
}

interface IndexSectionProps {
  items: IndexItem[];
  onNavigate?: (index: number) => void;
}

export default function IndexSection({ items = [], onNavigate }: IndexSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="section-header text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-3">
          Índice Completo
        </h2>
        <p className="section-description text-2xl md:text-3xl text-slate-700">
          Haz clic en cualquier sección para navegar directamente
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => onNavigate?.(item.index)}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group relative text-left h-full overflow-hidden rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-slate-50 to-slate-100 hover:from-amber-50 hover:to-orange-50 shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-600 focus:ring-offset-2"
            title={item.title}
            aria-label={`Ir a ${item.title}`}
          >
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-400/10 group-hover:to-orange-400/10 transition-all duration-300" />

            <div className="relative p-8 md:p-10 flex flex-col h-full gap-6">
              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white font-extrabold shadow-2xl group-hover:shadow-2xl transition-all duration-300">
                <span className="text-2xl md:text-3xl">{item.id}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors duration-300 line-clamp-3">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 mt-3">
                  Sección {item.index}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="flex items-center text-amber-600 font-semibold text-sm md:text-base group-hover:translate-x-1 transition-transform duration-300">
                Ir →
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Footer info */}
      <div className="mt-12 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
        <p className="text-sm text-slate-700 text-center">
          <span className="font-semibold text-amber-700">{items.length} secciones</span> disponibles en total
        </p>
      </div>
    </div>
  );
}
