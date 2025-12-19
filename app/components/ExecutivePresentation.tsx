'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ConceptSection, StrategicCharacteristicsSection, BusinessPlanSection, AnalysisSection } from './sections/TextSections';
import { DemandSegmentTable } from './sections/DemandSegmentSection';
import { ProductSection } from './sections/ProductSection';
import { MarketingSection } from './sections/MarketingSection';
import { OrganizationSection } from './sections/OrganizationSection';
import { FinancialSection } from './sections/FinancialSection';
import { IndicatorsSection, ComparisonSection, ResultsCausesSection } from './sections/IndicatorsSection';
import IndexSection from './sections/IndexSection';
import * as data from '../data/simulatorData';

interface SectionConfig {
  id: number;
  title: string;
  component: React.ComponentType<any>;
  props: Record<string, any>;
}

const baseSections: SectionConfig[] = [
  {
    id: 1,
    title: data.conceptData.title,
    component: ConceptSection,
    props: data.conceptData,
  },
  {
    id: 2,
    title: '2. Características Estratégicas',
    component: StrategicCharacteristicsSection,
    props: { characteristics: data.strategicCharacteristics },
  },
  {
    id: 3,
    title: '3. Segmentación de Demanda',
    component: DemandSegmentTable,
    props: { segments: data.demandSegments },
  },
  {
    id: 4,
    title: '4. Producto y Local',
    component: ProductSection,
    props: { locations: data.locations, facilities: data.facilities },
  },
  {
    id: 5,
    title: '5. Marketing y Posicionamiento',
    component: MarketingSection,
    props: { actions: data.marketingActions, marketShare: data.marketSegmentShare },
  },
  {
    id: 6,
    title: '6. Organización y Personal',
    component: OrganizationSection,
    props: { activities: data.activities, staffCosts: data.staffCosts },
  },
  {
    id: 7,
    title: '7. Ingresos y Pricing',
    component: FinancialSection,
    props: {
      revenues: data.revenues,
      balanceItems: [],
      analysis: 'Estrategia de pricing Skimming: cuotas elevadas para segmento premium. Matrícula de entrada como filtro de calidad. Modelo de pocas plazas, alto margen.',
    },
  },
  {
    id: 8,
    title: '8. Operaciones y Financiación',
    component: FinancialSection,
    props: {
      revenues: [],
      balanceItems: data.balanceItems,
      analysis:
        'Refinanciación crítica: Préstamo LP 750k€ cancela deuda CP tóxica. Activo Fijo elevado por CAPEX en instalaciones premium. Patrimonio Neto positivo respaldo solvencia operativa.',
    },
  },
  {
    id: 9,
    title: data.businessPlanAnalysis.title,
    component: BusinessPlanSection,
    props: data.businessPlanAnalysis,
  },
  {
    id: 10,
    title: '10. Primer Periodo (Diagnóstico Inicial)',
    component: IndicatorsSection,
    props: { indicators: data.firstPeriodIndicators, title: 'Indicadores Clave: Situación Inicial' },
  },
  {
    id: 11,
    title: '11. Segundo Periodo (Post-Decisión)',
    component: ComparisonSection,
    props: { comparisons: data.secondPeriodComparisons, title: 'Variación de Indicadores tras Decisiones' },
  },
  {
    id: 12,
    title: '12. Informe Final: Resultados y Causas',
    component: ResultsCausesSection,
    props: { results: data.resultsCauses },
  },
];

const sections: SectionConfig[] = [
  {
    id: 0,
    title: 'Índice',
    component: IndexSection,
    props: { items: baseSections.map((s, i) => ({ id: s.id, title: s.title, index: i + 1 })) },
  },
  ...baseSections,
];

export default function ExecutivePresentation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = sections[currentIndex];
  const isIndex = current.id === 0;
  const Component = current.component;
  const shouldReduceMotion = useReducedMotion();
  const currentProps = { ...current.props, onNavigate: (index: number) => goToSection(index) };

  const nextSection = () => {
    setCurrentIndex((i) => (i + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentIndex((i) => (i - 1 + sections.length) % sections.length);
  };

  const goToSection = (index: number) => {
    setCurrentIndex(index);
  };

  const progress = ((currentIndex + 1) / sections.length) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                GlobalGym 2025
              </h1>
              <p className="text-base text-slate-200 mt-1">
                Estrategia de Transformación Premium - Simulador de Gestión
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-slate-300">
                Sección {currentIndex + 1} de {sections.length}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content + Navigation wrapper (flexible area) */}
      <div className="flex-1 flex flex-col">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Section Title */}
          <div className="border-b-2 border-amber-500/40 pb-4">
            <motion.h2
              initial={{ opacity: 0, y: 8, scale: 0.995 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
              className={isIndex ? "text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900" : "text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900"}
            >
              {current.title}
            </motion.h2>
          </div>

          {/* Section Content */}
          <div className={isIndex ? "bg-white rounded-2xl shadow-lg p-6 md:p-8 text-lg" : "bg-white rounded-2xl shadow-lg p-6 md:p-8 text-xl"}>
            <Component {...currentProps} />
          </div>
        </motion.div>
      </main>

        {/* Navigation Controls */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
        <div className="mb-4">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-2 bg-amber-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6 gap-4">
          <motion.button
            onClick={prevSection}
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className={"w-full md:w-auto flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-700 text-white font-medium hover:bg-slate-600 transition " + (isIndex ? 'text-base' : 'text-lg')}
          >
            <ChevronLeft size={20} />
            Anterior
          </motion.button>

          <motion.button
            onClick={nextSection}
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className={"w-full md:w-auto flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold shadow-md hover:from-amber-400 hover:to-amber-500 transition " + (isIndex ? 'text-base' : 'text-lg')}
          >
            Siguiente
            <ChevronRight size={20} />
          </motion.button>
        </div>

        {/* Section Dots Navigation */}
        <div className="flex flex-wrap gap-2 justify-center px-2 py-2">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((section, idx) => (
              <motion.button
                key={section.id}
                onClick={() => goToSection(idx)}
                whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                className={`min-w-[44px] px-3 py-2 rounded-full text-xs sm:text-sm ${isIndex ? 'md:text-base' : 'md:text-lg'} font-medium transition ${
                  idx === currentIndex
                    ? 'bg-amber-600 text-white shadow'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
                title={section.title}
              >
                {section.id}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-center md:text-left text-base text-amber-200 font-bold mb-6 md:mb-0">
            Presentación Académica - GlobalGym
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left text-slate-300 text-base">
            <div>
              <div className="font-bold text-amber-200">Marco Bruno</div>
              <a href="mailto:mbruno90642ufide.ac.cr" className="hover:underline font-medium text-amber-100">mbruno90642ufide.ac.cr</a>
            </div>

            <div>
              <div className="font-bold text-amber-200">Ariana Chavarría Torres</div>
              <a href="mailto:achavarria20821@ufide.ac.cr" className="hover:underline font-medium text-amber-100">achavarria20821@ufide.ac.cr</a>
            </div>

            <div>
              <div className="font-bold text-amber-200">Johan Hernández Ramírez</div>
              <a href="mailto:jhernandez00485@ufide.ac.cr" className="hover:underline font-medium text-amber-100">jhernandez00485@ufide.ac.cr</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
