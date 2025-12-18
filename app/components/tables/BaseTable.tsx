'use client';

import React from 'react';

interface Column {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  format?: (value: any) => string | React.ReactNode;
  width?: string;
}

interface TableProps<T> {
  columns: Column[];
  data: T[];
  striped?: boolean;
  bordered?: boolean;
  title?: string;
  className?: string;
}

export function Table<T extends Record<string, any>>({
  columns,
  data,
  striped = true,
  bordered = true,
  title,
  className = '',
}: TableProps<T>) {
  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      {title && <h3 className="card-title text-xl font-semibold mb-4 text-gray-900">{title}</h3>}
      <table className="w-full text-base border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-blue-900 to-blue-800 text-white font-semibold">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-4 py-4 text-${col.align || 'left'} font-semibold text-lg`}
                style={{ width: col.width }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={`
                ${bordered ? 'border-b border-gray-200' : ''}
                ${striped && idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                hover:bg-blue-50 transition-colors
              `}
            >
              {columns.map((col) => {
                const value = row[col.key];
                const formatted = col.format ? col.format(value) : value;
                return (
                  <td
                    key={`${idx}-${col.key}`}
                    className={`px-4 py-4 text-${col.align || 'left'} text-gray-700 text-base`}
                  >
                    {formatted}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface ScenarioTableProps<T> {
  columns: Array<Column & { isScenario?: boolean }>;
  data: T[];
  title?: string;
  scenarios?: string[];
}

export function ScenarioTable<T extends Record<string, any>>({
  columns,
  data,
  title,
  scenarios = ['Escenario 1', 'Escenario 2', 'Escenario 3'],
}: ScenarioTableProps<T>) {
  return (
    <div className="w-full overflow-x-auto">
      {title && <h3 className="card-title text-xl font-semibold mb-4 text-gray-900">{title}</h3>}
      <table className="w-full text-base border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-4 py-4 font-semibold text-lg text-${col.align || 'left'}`}
                style={{ width: col.width }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={`border-b border-gray-200 ${
                idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              } hover:bg-blue-50 transition-colors`}
            >
              {columns.map((col) => {
                const value = row[col.key];
                const formatted = col.format ? col.format(value) : value;
                return (
                  <td
                    key={`${idx}-${col.key}`}
                    className={`px-4 py-4 text-base text-${col.align || 'left'} text-gray-700 ${
                      col.isScenario ? 'font-medium' : ''
                    }`}
                  >
                    {formatted}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Formatter utilities
export const formatters = {
  currency: (value: number) => `€${value.toLocaleString('es-ES')}`,
  percentage: (value: number) => `${value}%`,
  number: (value: number) => value.toLocaleString('es-ES'),
  decimal: (value: number) => value.toFixed(2),
  rating: (value: number) => {
    const stars = '★'.repeat(value) + '☆'.repeat(5 - value);
    return `${value}/5 ${stars}`;
  },
};
