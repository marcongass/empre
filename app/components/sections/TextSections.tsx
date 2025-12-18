'use client';

import React from 'react';
import { StrategicCharacteristic } from '@/app/types';

interface ConceptSectionProps {
  title: string;
  description: string;
}

export function ConceptSection({ title, description }: ConceptSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="section-header text-4xl font-bold text-gray-900">{title}</h2>
      <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-600">
        <p className="section-description text-gray-800 leading-relaxed text-2xl">{description}</p>
      </div>
    </div>
  );
}

interface StrategicCharacteristicsSectionProps {
  characteristics: StrategicCharacteristic[];
  title?: string;
}

export function StrategicCharacteristicsSection({ 
  characteristics, 
  title = "Características Estratégicas"
}: StrategicCharacteristicsSectionProps) {
  const colors = [
    { bg: 'from-blue-50 to-blue-100', border: 'border-blue-500', text: 'text-blue-900' },
    { bg: 'from-purple-50 to-purple-100', border: 'border-purple-500', text: 'text-purple-900' },
    { bg: 'from-green-50 to-green-100', border: 'border-green-500', text: 'text-green-900' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="card-title text-2xl font-semibold text-gray-900">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {characteristics.map((char, idx) => {
          const color = colors[idx % colors.length];
          return (
            <div
              key={idx}
              className={`p-6 bg-gradient-to-br ${color.bg} rounded-lg border-l-4 ${color.border}`}
            >
              <h4 className={`card-title font-bold ${color.text} mb-3 text-2xl`}>
                {char.aspect}
              </h4>
              <p className="card-text text-gray-700 text-2xl leading-relaxed">
                {char.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface BusinessPlanSectionProps {
  title: string;
  introduction: string;
  demandAnalysis: string;
  productAnalysis: string;
  marketingAnalysis: string;
  organizationAnalysis: string;
  revenueAnalysis: string;
  operationsAnalysis: string;
  conclusion: string;
}

export function BusinessPlanSection({
  title,
  introduction,
  demandAnalysis,
  productAnalysis,
  marketingAnalysis,
  organizationAnalysis,
  revenueAnalysis,
  operationsAnalysis,
  conclusion,
}: BusinessPlanSectionProps) {
  const sections = [
    { label: '1. Demanda', content: demandAnalysis, color: 'border-blue-500' },
    { label: '2. Producto', content: productAnalysis, color: 'border-green-500' },
    { label: '3. Marketing', content: marketingAnalysis, color: 'border-purple-500' },
    { label: '4. Organización', content: organizationAnalysis, color: 'border-yellow-500' },
    { label: '5. Ingresos', content: revenueAnalysis, color: 'border-orange-500' },
    { label: '6. Operaciones', content: operationsAnalysis, color: 'border-red-500' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="section-header text-4xl font-bold text-gray-900">{title}</h2>
      
      <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
        <p className="section-description text-gray-800 leading-relaxed text-2xl">{introduction}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`p-4 bg-gray-50 rounded-lg border-l-4 ${section.color}`}
          >
            <h3 className="card-title font-bold text-gray-900 mb-2 text-2xl">{section.label}</h3>
            <p className="card-text text-gray-700 text-2xl leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-600">
        <h3 className="card-title font-bold text-green-900 mb-2 text-2xl">Conclusión</h3>
        <p className="section-description text-green-800 leading-relaxed text-2xl">{conclusion}</p>
      </div>
    </div>
  );
}

interface AnalysisSectionProps {
  title: string;
  content: string;
  type?: 'info' | 'warning' | 'success' | 'error';
}

export function AnalysisSection({ 
  title, 
  content, 
  type = 'info' 
}: AnalysisSectionProps) {
  const typeStyles = {
    info: 'from-blue-50 to-blue-100 border-blue-500 text-blue-900',
    warning: 'from-yellow-50 to-yellow-100 border-yellow-500 text-yellow-900',
    success: 'from-green-50 to-green-100 border-green-500 text-green-900',
    error: 'from-red-50 to-red-100 border-red-500 text-red-900',
  };

  return (
    <div className={`p-6 bg-gradient-to-r ${typeStyles[type]} rounded-lg border-l-4`}>
      <h3 className="card-title font-semibold text-lg mb-3">{title}</h3>
      <p className="section-description leading-relaxed text-lg">{content}</p>
    </div>
  );
}
