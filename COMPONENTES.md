# GlobalGym 2025 - Presentación Académica

Aplicación Next.js 14+ para presentar resultados de simulador de gestión de centro deportivo. Sistema completo de 12 secciones interactivas con tablas profesionales, análisis financiero y datos editables.

## 🎯 Características

### ✅ Componentes Implementados (12 Secciones)

1. **Concepto Centro Deportivo** - Descripción de filosofía y posicionamiento
2. **Características Estratégicas** - Distrito, cliente objetivo, modelo de negocio
3. **Segmentación de Demanda** - Tabla con 6 segmentos × 5 criterios (1-5)
4. **Producto/Local** - Comparativa de locales + Inversión por instalación y calidad
5. **Marketing** - Priorización de acciones + Participación de mercado
6. **Organización** - Atractivo de actividades + Coste de plantilla por departamento
7. **Ingresos/Pricing** - Tabla de escenarios de ingresos
8. **Operaciones/Financiación** - Balance de situación (Activo/Pasivo)
9. **Business Plan** - Justificación integrada de decisiones estratégicas
10. **Primer Período** - Indicadores clave con definición y análisis
11. **Segundo Período** - Comparativa de indicadores (anterior/actual/objetivo)
12. **Informe Final** - Resultados positivos y negativos con causas

### 🛠 Tecnología

- **Next.js 14+** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para diseño profesional
- **Framer Motion** para animaciones
- **Componentes modulares y reutilizables**

## 📁 Estructura de Carpetas

```
app/
├── components/
│   ├── ExecutivePresentation.tsx    # Componente principal
│   ├── tables/
│   │   └── BaseTable.tsx            # Tablas reutilizables
│   └── sections/
│       ├── DemandSegmentSection.tsx
│       ├── ProductSection.tsx
│       ├── MarketingSection.tsx
│       ├── OrganizationSection.tsx
│       ├── FinancialSection.tsx
│       ├── IndicatorsSection.tsx
│       └── TextSections.tsx
├── data/
│   └── simulatorData.ts             # Datos de todas las secciones
├── types/
│   └── index.ts                     # Interfaces TypeScript
├── page.tsx                         # Página principal
├── layout.tsx
└── globals.css
```

## 🚀 Uso

### Instalación

```bash
npm install
# o
pnpm install
```

### Desarrollo

```bash
npm run dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Personalización de Datos

Todos los datos se encuentran en [data/simulatorData.ts](app/data/simulatorData.ts):

```typescript
// Ejemplo: Editar segmentos de demanda
export const demandSegments: DemandSegment[] = [
  {
    name: 'Ejecutivo Corporativo',
    instalaciones: 4,
    servicio: 5,
    precio: 4,
    ubicacion: 5,
    marca: 5,
  },
  // ... más segmentos
];
```

**Tipos disponibles** en [types/index.ts](app/types/index.ts):
- `DemandSegment`
- `LocationProperty`
- `FacilityInvestment`
- `MarketingAction`
- `MarketSegmentShare`
- `ActivityAttraction`
- `StaffDepartment`
- `RevenueScenario`
- `BalanceSheetItem`
- `IndicatorMetric`
- `IndicatorComparison`
- `ResultCause`

## 🎨 Componentes Reutilizables

### BaseTable

Tabla genérica profesional con estilos Tailwind:

```tsx
import { Table, formatters } from '@/app/components/tables/BaseTable';

<Table 
  columns={[
    { key: 'name', label: 'Nombre', width: '30%' },
    { 
      key: 'revenue', 
      label: 'Ingresos', 
      align: 'right',
      format: formatters.currency 
    }
  ]}
  data={data}
  striped
  bordered
/>
```

### Formatters Disponibles

- `formatters.currency(value)` → "€1.200,00"
- `formatters.percentage(value)` → "85%"
- `formatters.number(value)` → "1.234"
- `formatters.decimal(value)` → "3.14"
- `formatters.rating(value)` → "4/5 ★★★★☆"

### ScenarioTable

Tabla especializada para comparativas por escenarios:

```tsx
<ScenarioTable 
  columns={columns}
  data={data}
  scenarios={['Escenario 1', 'Escenario 2', 'Escenario 3']}
/>
```

## 📊 Componentes de Secciones

### ConceptSection

Sección de texto con énfasis:

```tsx
<ConceptSection 
  title="Mi Título"
  description="Descripción del concepto..."
/>
```

### DemandSegmentTable

Tabla de segmentos con badges de valoración:

```tsx
<DemandSegmentTable segments={demandSegments} />
```

### ProductSection

Dos tablas: comparativa de locales e inversión por instalación:

```tsx
<ProductSection 
  locations={locations}
  facilities={facilities}
/>
```

### MarketingSection

Priorización de acciones y participación de mercado:

```tsx
<MarketingSection 
  actions={marketingActions}
  marketShare={marketSegmentShare}
/>
```

### OrganizationSection

Atractivo de actividades y coste de plantilla:

```tsx
<OrganizationSection 
  activities={activities}
  staffCosts={staffCosts}
/>
```

### FinancialSection

Ingresos y balance de situación:

```tsx
<FinancialSection 
  revenues={revenues}
  balanceItems={balanceItems}
  analysis="Texto de análisis..."
/>
```

### IndicatorsSection, ComparisonSection, ResultsCausesSection

Indicadores, comparativas y resultados:

```tsx
<IndicatorsSection indicators={indicators} title="Indicadores" />
<ComparisonSection comparisons={comparisons} title="Variación" />
<ResultsCausesSection results={resultsCauses} />
```

### BusinessPlanSection

Análisis integrado de decisiones:

```tsx
<BusinessPlanSection 
  title="9. Plan de Negocio"
  introduction="..."
  demandAnalysis="..."
  productAnalysis="..."
  marketingAnalysis="..."
  organizationAnalysis="..."
  revenueAnalysis="..."
  operationsAnalysis="..."
  conclusion="..."
/>
```

### TextSections

Secciones de análisis con tipos:

```tsx
<AnalysisSection 
  title="Análisis"
  content="..."
  type="info" // 'info' | 'warning' | 'success' | 'error'
/>
```

## 🎯 Navegación

- **Botones Anterior/Siguiente**: navega entre secciones
- **Números (1-12)**: salta directamente a sección
- **Diseño responsive**: optimizado para desktop, tablet y móvil

## 📋 Estilos Visuales

### Paleta de Colores

- **Header**: Azul gradiente (blue-900 a blue-800)
- **Acentos**: Azul (blue-600), Verde (green-600), Rojo (red-600)
- **Fondo**: Blanco/Gray-50
- **Texto**: Gray-900 (principal), Gray-600 (secundario)

### Características

- ✅ Tablas con zebra striping
- ✅ Headers destacados con gradiente
- ✅ Hover effects suaves
- ✅ Números alineados a derecha
- ✅ Moneda/porcentaje formateados automáticamente
- ✅ Badges coloridos para calificaciones
- ✅ Espaciado generoso entre secciones
- ✅ Animaciones suaves con Framer Motion

## 🔧 Personalización Avanzada

### Agregar Nueva Sección

1. Crear componente en `components/sections/`
2. Crear interfaz de datos en `types/index.ts`
3. Agregar datos en `data/simulatorData.ts`
4. Importar en `ExecutivePresentation.tsx`
5. Agregar a array `sections`

### Modificar Estilos Globales

Editar [app/globals.css](app/globals.css) para cambiar:
- Fuentes
- Colores base
- Espaciado
- Tamaños

### Cambiar Formateo de Datos

En [components/tables/BaseTable.tsx](app/components/tables/BaseTable.tsx):

```typescript
export const formatters = {
  currency: (value: number) => `€${value.toLocaleString('es-ES')}`,
  // Agregar más formateadores aquí
  tuFormato: (value: any) => {
    // Tu lógica personalizada
  }
};
```

## 📱 Responsive Design

- **Desktop**: Grid de 3 columnas, tabla ancha
- **Tablet**: Grid de 2 columnas, scroll horizontal en tablas
- **Mobile**: Grid de 1 columna, scroll para tablas

## 🚢 Deployment

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Licencia

Proyecto académico - Libre para uso educativo

## 📞 Soporte

Para consultas sobre estructura de datos o personalización, revisar:
- Tipos en `app/types/index.ts`
- Datos de ejemplo en `app/data/simulatorData.ts`
- Componentes base en `app/components/`
