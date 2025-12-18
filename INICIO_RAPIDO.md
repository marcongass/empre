# Guía Rápida - GlobalGym 2025

## 🎬 Inicio Rápido

### 1. Ejecutar en Desarrollo
```bash
pnpm dev
# Luego abre http://localhost:3000
```

### 2. Compilar para Producción
```bash
pnpm build
pnpm start
```

## 📊 Estructura de Datos

### Cómo Editar Datos

Todos los datos están en **`app/data/simulatorData.ts`**. Ejemplo:

```typescript
// Cambiar demanda de segmentos
export const demandSegments: DemandSegment[] = [
  {
    name: 'Mi Nuevo Segmento',
    instalaciones: 5,
    servicio: 4,
    precio: 3,
    ubicacion: 5,
    marca: 4,
  },
  // ... más segmentos
];

// Cambiar ubicaciones
export const locations: LocationProperty[] = [
  {
    name: 'Mi Local Premium',
    superficie: 3500,
    parking: 80,
    // ... resto de propiedades
  }
];
```

## 🎨 Personalización de Estilos

### Colores Principales

En **`app/globals.css`** o directamente en componentes Tailwind:

- Headers: `from-blue-900 to-blue-800` (azul oscuro)
- Botones: `bg-blue-600 hover:bg-blue-700`
- Acentos positivos: `text-green-900`
- Acentos negativos: `text-red-900`

### Modificar Paleta

```tsx
// En cualquier componente
<div className="bg-gradient-to-r from-indigo-600 to-purple-600">
  Tu contenido
</div>
```

## 📋 Agregar Nueva Sección

### Paso 1: Crear Tipo de Datos

En `app/types/index.ts`:
```typescript
export interface MiSeccion {
  titulo: string;
  valor: number;
  descripcion: string;
}
```

### Paso 2: Crear Componente

En `app/components/sections/MiSeccion.tsx`:
```typescript
'use client';

import React from 'react';

interface MiSeccionProps {
  datos: MiSeccion[];
}

export function MiSeccion({ datos }: MiSeccionProps) {
  return (
    <div className="space-y-4">
      {datos.map((item, idx) => (
        <div key={idx} className="p-4 bg-white rounded border">
          <h3 className="font-bold">{item.titulo}</h3>
          <p>{item.valor}</p>
        </div>
      ))}
    </div>
  );
}
```

### Paso 3: Agregar Datos

En `app/data/simulatorData.ts`:
```typescript
export const miSeccion: MiSeccion[] = [
  { titulo: 'Ejemplo', valor: 100, descripcion: '...' }
];
```

### Paso 4: Agregar a Presentación

En `app/components/ExecutivePresentation.tsx`:
```typescript
import { MiSeccion } from './sections/MiSeccion';
import * as data from '@/app/data/simulatorData';

const sections: SectionConfig[] = [
  // ... secciones existentes
  {
    id: 13,
    title: 'Mi Nueva Sección',
    component: MiSeccion,
    props: { datos: data.miSeccion },
  },
];
```

## 🎯 Componentes Disponibles

### Tablas

```tsx
// Tabla genérica
import { Table, formatters } from '@/app/components/tables/BaseTable';

<Table 
  columns={[
    { key: 'nombre', label: 'Nombre', width: '30%' },
    { 
      key: 'precio', 
      label: 'Precio', 
      align: 'right',
      format: formatters.currency  // €1.200,00
    }
  ]}
  data={misDatos}
  striped
  bordered
/>

// Tabla con escenarios
import { ScenarioTable } from '@/app/components/tables/BaseTable';

<ScenarioTable 
  columns={columnas}
  data={datos}
  scenarios={['E1', 'E2', 'E3']}
/>
```

### Secciones de Texto

```tsx
// Concepto con énfasis
import { ConceptSection } from '@/app/components/sections/TextSections';

<ConceptSection 
  title="Mi Concepto"
  description="Descripción detallada..."
/>

// Características en grid
import { StrategicCharacteristicsSection } from '@/app/components/sections/TextSections';

<StrategicCharacteristicsSection 
  characteristics={[
    { aspect: 'Aspecto 1', description: 'Descripción' }
  ]}
/>

// Análisis con tipo
import { AnalysisSection } from '@/app/components/sections/TextSections';

<AnalysisSection 
  title="Análisis"
  content="Contenido"
  type="success"  // 'info' | 'warning' | 'success' | 'error'
/>
```

### Tablas Especializadas

```tsx
// Demanda
import { DemandSegmentTable } from '@/app/components/sections/DemandSegmentSection';
<DemandSegmentTable segments={data.demandSegments} />

// Producto
import { ProductSection } from '@/app/components/sections/ProductSection';
<ProductSection locations={data.locations} facilities={data.facilities} />

// Marketing
import { MarketingSection } from '@/app/components/sections/MarketingSection';
<MarketingSection actions={data.marketingActions} marketShare={data.marketSegmentShare} />

// Organización
import { OrganizationSection } from '@/app/components/sections/OrganizationSection';
<OrganizationSection activities={data.activities} staffCosts={data.staffCosts} />

// Finanzas
import { FinancialSection } from '@/app/components/sections/FinancialSection';
<FinancialSection revenues={data.revenues} balanceItems={data.balanceItems} analysis="..." />

// Indicadores
import { IndicatorsSection, ComparisonSection, ResultsCausesSection } from '@/app/components/sections/IndicatorsSection';
<IndicatorsSection indicators={data.firstPeriodIndicators} title="Indicadores" />
<ComparisonSection comparisons={data.secondPeriodComparisons} title="Comparativa" />
<ResultsCausesSection results={data.resultsCauses} />
```

## 🔢 Formateos Disponibles

```typescript
import { formatters } from '@/app/components/tables/BaseTable';

formatters.currency(1200)        // "€1.200,00"
formatters.percentage(85)        // "85%"
formatters.number(1234)          // "1.234"
formatters.decimal(3.14159)      // "3.14"
formatters.rating(4)             // "4/5 ★★★★☆"
```

## 🎯 Tips de Diseño

### Colores por Contexto

```tsx
// Positivo
<span className="bg-green-100 text-green-900">Positivo</span>

// Negativo
<span className="bg-red-100 text-red-900">Negativo</span>

// Neutro
<span className="bg-gray-100 text-gray-900">Neutro</span>

// Premium/Destacado
<span className="bg-blue-600 text-white">Destacado</span>

// Alternativas
<span className="bg-purple-100 text-purple-900">Opción 1</span>
<span className="bg-yellow-100 text-yellow-900">Opción 2</span>
<span className="bg-orange-100 text-orange-900">Opción 3</span>
```

### Espaciado Estándar

```tsx
// Vertical
<div className="space-y-4">    {/* 1rem entre items */}
<div className="space-y-6">    {/* 1.5rem entre items */}
<div className="space-y-8">    {/* 2rem entre items */}

// Horizontal
<div className="gap-4">        {/* 1rem entre items */}
<div className="gap-6">        {/* 1.5rem entre items */}
```

### Tipografía

```tsx
// Títulos
<h1 className="text-3xl font-bold">      {/* Grande */}
<h2 className="text-2xl font-bold">      {/* Medio */}
<h3 className="text-lg font-semibold">  {/* Pequeño */}

// Textos
<p className="text-gray-700">             {/* Principal */}
<p className="text-gray-600 text-sm">    {/* Secundario */}
<p className="text-gray-500 text-xs">    {/* Terciario */}
```

## 📱 Breakpoints Responsive

```tsx
// Mobile first (por defecto)
<div className="w-full">

// Tablet y arriba (768px)
<div className="md:w-1/2 lg:w-1/3">

// Desktop y arriba (1024px)
<div className="lg:grid-cols-3">

// Large screens (1280px+)
<div className="xl:px-8">
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
pnpm install -g vercel
vercel
# Sigue las instrucciones interactivas
```

### Netlify
```bash
pnpm run build
# Sube la carpeta .next a Netlify
```

### Docker
```bash
docker build -t globalgym .
docker run -p 3000:3000 globalgym
```

## 🐛 Troubleshooting

### Problema: "Module not found"
**Solución**: Verifica imports en `tsconfig.json` y usa rutas absolutas:
```tsx
import { X } from '@/app/components/...'
```

### Problema: "Styles not loading"
**Solución**: Asegúrate que `app/globals.css` está importado en `layout.tsx`

### Problema: "Table render error"
**Solución**: Verifica que `format` retorna `string | React.ReactNode`

## 📞 Documentación Completa

Ver [COMPONENTES.md](./COMPONENTES.md) para documentación detallada de todos los componentes.
