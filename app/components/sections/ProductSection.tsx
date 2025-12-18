'use client';

import React from 'react';
import { Table, ScenarioTable, formatters } from '../tables/BaseTable';
import { LocationProperty, FacilityInvestment } from '@/app/types';

interface ProductSectionProps {
  locations: LocationProperty[];
  facilities: FacilityInvestment[];
}

export function ProductSection({ locations, facilities }: ProductSectionProps) {
  const locationColumns = [
    { key: 'name', label: 'Local', width: '15%' },
    { 
      key: 'superficie', 
      label: 'Superficie (m²)', 
      align: 'right' as const,
      format: formatters.number 
    },
    { 
      key: 'parking', 
      label: 'Parking', 
      align: 'center' as const,
      format: (v: number) => v > 0 ? `${v} plazas` : '—'
    },
    { 
      key: 'ampliacion', 
      label: 'Ampliación (m²)', 
      align: 'right' as const,
      format: (v: number) => v > 0 ? `${v}` : '—'
    },
    { 
      key: 'terraza', 
      label: 'Terraza (m²)', 
      align: 'right' as const,
      format: (v: number) => v > 0 ? `${v}` : '—'
    },
    { 
      key: 'accesibilidad', 
      label: 'Accesibilidad', 
      align: 'center' as const,
      format: (v: number) => v === 1 ? '✓' : '✗'
    },
    { key: 'tipo', label: 'Tipo', align: 'center' as const },
    { key: 'estado', label: 'Estado', align: 'center' as const },
    { 
      key: 'alquiler', 
      label: 'Alquiler (€/mes)', 
      align: 'right' as const,
      format: formatters.currency
    },
    { 
      key: 'compra', 
      label: 'Compra (€)', 
      align: 'right' as const,
      format: formatters.currency
    },
  ];

  const facilityColumns = [
    { key: 'facility', label: 'Instalación', width: '25%' },
    { 
      key: 'funcional', 
      label: 'Funcional (€/m²)', 
      align: 'right' as const,
      format: formatters.currency
    },
    { 
      key: 'estandar', 
      label: 'Estándar (€/m²)', 
      align: 'right' as const,
      format: formatters.currency
    },
    { 
      key: 'superior', 
      label: 'Superior (€/m²)', 
      align: 'right' as const,
      format: formatters.currency
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="card-title text-xl font-semibold text-gray-900 mb-4">
          Comparativa de Locales
        </h3>
        <Table columns={locationColumns} data={locations} striped bordered />
      </div>

      <div>
        <h3 className="card-title text-xl font-semibold text-gray-900 mb-4">
          Inversión por Instalación y Calidad
        </h3>
        <p className="section-description text-base text-gray-600 mb-4">
          Coste de inversión por metro cuadrado según calidad de acabado
        </p>
        <Table columns={facilityColumns} data={facilities} striped bordered />
        
        {/* Quality indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-900 mb-2">Funcional</h4>
            <p className="text-sm text-orange-800">
              Equipamiento básico y esencial. Cumple normativas. Atractivo para usuario básico.
            </p>
          </div>
          <div className="p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-2">Estándar</h4>
            <p className="text-sm text-yellow-800">
              Equipamiento completo con acabados profesionales. Balance calidad-precio.
            </p>
          </div>
          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">Superior</h4>
            <p className="text-sm text-green-800">
              Equipamiento premium con acabados de lujo. Marca diferencial y posicionamiento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
