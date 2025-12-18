'use client';

import React from 'react';
import { ScenarioTable, formatters } from '../tables/BaseTable';
import { MarketingAction, MarketSegmentShare } from '@/app/types';

interface MarketingSectionProps {
  actions: MarketingAction[];
  marketShare: MarketSegmentShare[];
}

export function MarketingSection({ actions, marketShare }: MarketingSectionProps) {
  const actionColumns = [
    { key: 'action', label: 'Acción de Marketing', width: '30%' },
    { 
      key: 'scenario1', 
      label: 'Escenario 1', 
      align: 'center' as const,
      isScenario: true,
      format: (v: number) => {
        const priorities = {
          1: 'Alta',
          2: 'Media-Alta',
          3: 'Media',
          4: 'Media-Baja',
          5: 'Baja'
        };
        const colors = {
          1: 'bg-red-100 text-red-900',
          2: 'bg-orange-100 text-orange-900',
          3: 'bg-yellow-100 text-yellow-900',
          4: 'bg-blue-100 text-blue-900',
          5: 'bg-gray-100 text-gray-900'
        };
        return (
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[v as keyof typeof colors]}`}>
            {priorities[v as keyof typeof priorities]} ({v})
          </span>
        );
      }
    },
    { 
      key: 'scenario2', 
      label: 'Escenario 2', 
      align: 'center' as const,
      isScenario: true,
      format: (v: number) => {
        const priorities = {
          1: 'Alta',
          2: 'Media-Alta',
          3: 'Media',
          4: 'Media-Baja',
          5: 'Baja'
        };
        const colors = {
          1: 'bg-red-100 text-red-900',
          2: 'bg-orange-100 text-orange-900',
          3: 'bg-yellow-100 text-yellow-900',
          4: 'bg-blue-100 text-blue-900',
          5: 'bg-gray-100 text-gray-900'
        };
        return (
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[v as keyof typeof colors]}`}>
            {priorities[v as keyof typeof priorities]} ({v})
          </span>
        );
      }
    },
    { 
      key: 'scenario3', 
      label: 'Escenario 3', 
      align: 'center' as const,
      isScenario: true,
      format: (v: number) => {
        const priorities = {
          1: 'Alta',
          2: 'Media-Alta',
          3: 'Media',
          4: 'Media-Baja',
          5: 'Baja'
        };
        const colors = {
          1: 'bg-red-100 text-red-900',
          2: 'bg-orange-100 text-orange-900',
          3: 'bg-yellow-100 text-yellow-900',
          4: 'bg-blue-100 text-blue-900',
          5: 'bg-gray-100 text-gray-900'
        };
        return (
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[v as keyof typeof colors]}`}>
            {priorities[v as keyof typeof priorities]} ({v})
          </span>
        );
      }
    },
  ];

  const shareColumns = [
    { key: 'segment', label: 'Segmento', width: '30%' },
    { 
      key: 'scenario1', 
      label: 'Escenario 1', 
      align: 'right' as const,
      isScenario: true,
      format: formatters.percentage
    },
    { 
      key: 'scenario2', 
      label: 'Escenario 2', 
      align: 'right' as const,
      isScenario: true,
      format: formatters.percentage
    },
    { 
      key: 'scenario3', 
      label: 'Escenario 3', 
      align: 'right' as const,
      isScenario: true,
      format: formatters.percentage
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="card-title text-xl font-semibold text-gray-900 mb-4">
          Priorización de Acciones de Marketing
        </h3>
        <p className="section-description text-base text-gray-600 mb-4">
          Escala de prioridad 1 (Alta) a 5 (Baja) por escenario
        </p>
        <ScenarioTable columns={actionColumns} data={actions} />
      </div>

      <div>
        <h3 className="card-title text-xl font-semibold text-gray-900 mb-4">
          Participación de Mercado por Segmento
        </h3>
        <p className="section-description text-base text-gray-600 mb-4">
          Porcentaje de penetración en cada segmento por escenario
        </p>
        <ScenarioTable columns={shareColumns} data={marketShare} />
      </div>
    </div>
  );
}
