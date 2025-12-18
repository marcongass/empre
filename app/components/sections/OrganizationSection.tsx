'use client';

import React from 'react';
import { ScenarioTable, formatters } from '../tables/BaseTable';
import { ActivityAttraction, StaffDepartment } from '@/app/types';

interface OrganizationSectionProps {
  activities: ActivityAttraction[];
  staffCosts: StaffDepartment[];
}

export function OrganizationSection({ activities, staffCosts }: OrganizationSectionProps) {
  const activityColumns = [
    { key: 'activity', label: 'Actividad', width: '30%' },
    { 
      key: 'scenario1', 
      label: 'Escenario 1', 
      align: 'center' as const,
      isScenario: true,
      format: (v: number) => (
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-900 font-bold">
          {v}
        </span>
      )
    },
    { 
      key: 'scenario2', 
      label: 'Escenario 2', 
      align: 'center' as const,
      isScenario: true,
      format: (v: number) => (
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-green-200 text-green-900 font-bold">
          {v}
        </span>
      )
    },
    { 
      key: 'scenario3', 
      label: 'Escenario 3', 
      align: 'center' as const,
      isScenario: true,
      format: (v: number) => (
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 text-purple-900 font-bold">
          {v}
        </span>
      )
    },
  ];

  const staffColumns = [
    { key: 'department', label: 'Departamento', width: '30%' },
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

  // Calculate totals for staff costs
  const staffTotals = {
    scenario1: staffCosts.reduce((sum, item) => sum + item.scenario1, 0),
    scenario2: staffCosts.reduce((sum, item) => sum + item.scenario2, 0),
    scenario3: staffCosts.reduce((sum, item) => sum + item.scenario3, 0),
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="card-title text-xl font-semibold text-gray-900 mb-4">
          Atractivo de Actividades
        </h3>
        <p className="section-description text-base text-gray-600 mb-4">
          Valoración de atractivo para clientes (escala 1-10)
        </p>
        <ScenarioTable columns={activityColumns} data={activities} />
      </div>

      <div>
        <h3 className="card-title text-xl font-semibold text-gray-900 mb-4">
          Coste de Plantilla por Departamento
        </h3>
        <p className="section-description text-base text-gray-600 mb-4">
          Inversión anual en recursos humanos por departamento y escenario
        </p>
        <ScenarioTable columns={staffColumns} data={staffCosts} />
        
        {/* Totals Summary */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3">Coste Total de Plantilla (Anual)</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm text-blue-700 mb-1">Escenario 1</p>
              <p className="text-2xl font-bold text-blue-900">{formatters.currency(staffTotals.scenario1)}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-blue-700 mb-1">Escenario 2</p>
              <p className="text-2xl font-bold text-blue-900">{formatters.currency(staffTotals.scenario2)}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-blue-700 mb-1">Escenario 3</p>
              <p className="text-2xl font-bold text-blue-900">{formatters.currency(staffTotals.scenario3)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
