'use client';

import React from 'react';
import { Table, formatters } from '../tables/BaseTable';
import { IndicatorMetric, IndicatorComparison, ResultCause } from '@/app/types';

interface IndicatorsSectionProps {
  indicators: IndicatorMetric[];
  title: string;
}

export function IndicatorsSection({ indicators, title }: IndicatorsSectionProps) {
  const columns = [
    { key: 'name', label: 'Indicador', width: '25%' },
    { key: 'definition', label: 'Definición', width: '40%' },
    { key: 'value', label: 'Valor', align: 'right' as const, width: '15%' },
    { key: 'analysis', label: 'Análisis', width: '20%' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="card-title text-xl font-semibold text-gray-900">{title}</h3>
      <Table columns={columns} data={indicators} striped bordered />
    </div>
  );
}

interface ComparisonSectionProps {
  comparisons: IndicatorComparison[];
  title: string;
}

export function ComparisonSection({ comparisons, title }: ComparisonSectionProps) {
  const columns = [
    { key: 'indicator', label: 'Indicador', width: '25%' },
    { 
      key: 'previous', 
      label: 'Valor Anterior', 
      align: 'right' as const,
      format: formatters.number
    },
    { 
      key: 'current', 
      label: 'Valor Actual', 
      align: 'right' as const,
      format: formatters.number
    },
    { 
      key: 'objective', 
      label: 'Objetivo', 
      align: 'right' as const,
      format: formatters.number
    },
    { 
      key: 'status', 
      label: 'Estado',
      align: 'center' as const,
      format: (v: 'positive' | 'negative' | 'neutral') => {
        const icons = {
          positive: '↑ Positivo',
          negative: '↓ Negativo',
          neutral: '→ Neutral'
        };
        const colors = {
          positive: 'bg-green-100 text-green-900',
          negative: 'bg-red-100 text-red-900',
          neutral: 'bg-gray-100 text-gray-900'
        };
        return (
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[v]}`}>
            {icons[v]}
          </span>
        );
      }
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="card-title text-xl font-semibold text-gray-900">{title}</h3>
      <Table columns={columns} data={comparisons} striped bordered />
    </div>
  );
}

interface ResultsCausesSectionProps {
  results: ResultCause[];
}

export function ResultsCausesSection({ results }: ResultsCausesSectionProps) {
  const positiveResults = results.filter(r => r.type === 'positive');
  const negativeResults = results.filter(r => r.type === 'negative');

  return (
    <div className="space-y-8">
      {/* Positive Results */}
      <div>
        <h3 className="card-title text-xl font-semibold text-green-900 mb-4 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded border-l-4 border-green-600">
          Resultados Positivos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {positiveResults.map((result, idx) => (
            <div key={idx} className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="card-title font-semibold text-green-900 mb-2">{result.result}</p>
              <p className="card-text text-base text-green-800">
                <span className="font-medium">Causa: </span>{result.cause}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Negative Results */}
      <div>
        <h3 className="card-title text-xl font-semibold text-red-900 mb-4 p-3 bg-gradient-to-r from-red-50 to-red-100 rounded border-l-4 border-red-600">
          Resultados Negativos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {negativeResults.map((result, idx) => (
            <div key={idx} className="p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="card-title font-semibold text-red-900 mb-2">{result.result}</p>
              <p className="card-text text-base text-red-800">
                <span className="font-medium">Causa: </span>{result.cause}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
