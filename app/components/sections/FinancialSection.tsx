'use client';

import React from 'react';
import { Table, ScenarioTable, formatters } from '../tables/BaseTable';
import { RevenueScenario, BalanceSheetItem } from '@/app/types';

interface FinancialSectionProps {
  revenues: RevenueScenario[];
  balanceItems: BalanceSheetItem[];
  analysis?: string;
}

export function FinancialSection({ revenues, balanceItems, analysis }: FinancialSectionProps) {
  const revenueColumns = [
    { key: 'scenario', label: 'Escenario', width: '25%' },
    { 
      key: 'members', 
      label: 'Miembros', 
      align: 'right' as const,
      format: formatters.number
    },
    { 
      key: 'monthlyFee', 
      label: 'Cuota Mensual (€)', 
      align: 'right' as const,
      format: formatters.currency
    },
    { 
      key: 'totalRevenue', 
      label: 'Ingresos Anuales (€)', 
      align: 'right' as const,
      format: formatters.currency
    },
  ];

  const balanceColumns = [
    { key: 'concept', label: 'Concepto', width: '30%' },
    { 
      key: 'scenario1', 
      label: 'Escenario 1', 
      align: 'right' as const,
      isScenario: true,
      format: formatters.currency
    },
    { 
      key: 'scenario2', 
      label: 'Escenario 2', 
      align: 'right' as const,
      isScenario: true,
      format: formatters.currency
    },
    { 
      key: 'scenario3', 
      label: 'Escenario 3', 
      align: 'right' as const,
      isScenario: true,
      format: formatters.currency
    },
  ];

  // Separate assets and liabilities
  const assets = balanceItems.filter(item => item.concept.includes('Activo') || !item.concept.includes('Pasivo'));
  const liabilities = balanceItems.filter(item => item.concept.includes('Pasivo') || item.concept.includes('Deuda') || item.concept.includes('Préstamo'));

  return (
    <div className="space-y-8">
      <div>
        <h3 className="card-title text-xl font-semibold text-gray-900 mb-4">
          Ingresos por Escenario
        </h3>
        <Table columns={revenueColumns} data={revenues} striped bordered />
      </div>

      <div>
        <h3 className="card-title text-xl font-semibold text-gray-900 mb-4">
          Balance de Situación
        </h3>
        
        {/* Assets */}
        <div className="mb-8">
          <h4 className="text-base font-semibold text-gray-800 mb-3 p-3 bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded">
            ACTIVO
          </h4>
          <ScenarioTable columns={balanceColumns} data={assets} />
        </div>

        {/* Liabilities */}
        <div className="mb-8">
          <h4 className="text-base font-semibold text-gray-800 mb-3 p-3 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 rounded">
            PASIVO
          </h4>
          <ScenarioTable columns={balanceColumns} data={liabilities} />
        </div>

        {/* Analysis */}
        {analysis && (
          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <h4 className="font-semibold text-blue-900 mb-2">Análisis Financiero</h4>
            <p className="text-blue-800 text-sm leading-relaxed">{analysis}</p>
          </div>
        )}
      </div>
    </div>
  );
}
