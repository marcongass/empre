'use client';

import React from 'react';
import { Table, formatters } from '../tables/BaseTable';
import { DemandSegment } from '@/app/types';

interface DemandSegmentTableProps {
  segments: DemandSegment[];
  title?: string;
}

export function DemandSegmentTable({ 
  segments, 
  title = "Segmentación de Demanda"
}: DemandSegmentTableProps) {
  const columns = [
    {
      key: 'name',
      label: 'Segmento',
      align: 'left' as const,
      width: '20%',
    },
    {
      key: 'instalaciones',
      label: 'Instalaciones',
      align: 'center' as const,
      format: (v: number) => (
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-semibold">
          {v}
        </span>
      ),
    },
    {
      key: 'servicio',
      label: 'Servicio',
      align: 'center' as const,
      format: (v: number) => (
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-900 font-semibold">
          {v}
        </span>
      ),
    },
    {
      key: 'precio',
      label: 'Precio',
      align: 'center' as const,
      format: (v: number) => (
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-900 font-semibold">
          {v}
        </span>
      ),
    },
    {
      key: 'ubicacion',
      label: 'Ubicación',
      align: 'center' as const,
      format: (v: number) => (
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-900 font-semibold">
          {v}
        </span>
      ),
    },
    {
      key: 'marca',
      label: 'Marca',
      align: 'center' as const,
      format: (v: number) => (
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-900 font-semibold">
          {v}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="card-title text-xl font-semibold text-gray-900">{title}</h3>
      <p className="section-description text-base text-gray-600">
        Valoración de criterios por segmento (escala 1-5, donde 5 es máxima prioridad)
      </p>
      <Table columns={columns} data={segments} striped bordered />
      
      {/* Legend */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="w-8 h-8 rounded-full bg-blue-100 mx-auto mb-1"></div>
          <p className="card-text text-sm font-medium text-gray-700">Instalaciones</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 rounded-full bg-green-100 mx-auto mb-1"></div>
          <p className="card-text text-sm font-medium text-gray-700">Servicio</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 rounded-full bg-yellow-100 mx-auto mb-1"></div>
          <p className="card-text text-sm font-medium text-gray-700">Precio</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 rounded-full bg-purple-100 mx-auto mb-1"></div>
          <p className="card-text text-sm font-medium text-gray-700">Ubicación</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 rounded-full bg-red-100 mx-auto mb-1"></div>
          <p className="card-text text-sm font-medium text-gray-700">Marca</p>
        </div>
      </div>
    </div>
  );
}
