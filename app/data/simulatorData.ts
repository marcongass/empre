import {
  DemandSegment,
  LocationProperty,
  FacilityInvestment,
  MarketingAction,
  MarketSegmentShare,
  ActivityAttraction,
  StaffDepartment,
  RevenueScenario,
  BalanceSheetItem,
  IndicatorMetric,
  IndicatorComparison,
  ResultCause,
  StrategicCharacteristic,
} from '@/app/types';

// Section 1: Concepto Centro Deportivo
export const conceptData = {
  title: '1. Concepto de Centro Deportivo',
  description:
    'GlobalGym se posiciona como un "Club de Bienestar Integral Premium": un espacio exclusivo en Distrito 1 centrado en bienestar holístico, experiencias personalizadas y atención one-to-one. No es solo un gimnasio es un club privado que integra fitness, spa, nutrición y recuperación para ejecutivos y seniors que valoran privacidad, calidad y estatus.',
};

// Section 2: Características Estratégicas
export const strategicCharacteristics: StrategicCharacteristic[] = [
  {
    aspect: 'Distrito',
    description:
      'Zona 1 (Alta Renta). Ubicación estratégica en barrio de ejecutivos y profesionales de alto poder adquisitivo.',
  },
  {
    aspect: 'Cliente Objetivo',
    description:
      'Ejecutivos y Seniors. Segmentos inelásticos al precio, sensibles a calidad, servicio y experiencia diferenciada.',
  },
  {
    aspect: 'Modelo de Negocio',
    description:
      'Premium pricing como señal de calidad. Excelencia en servicio y valor de marca como filtro y diferenciador competitivo.',
  },
];

// Section 3: Demanda - Segmentos
export const demandSegments: DemandSegment[] = [
  {
    name: 'Deportista Profesional',
    instalaciones: 5,
    servicio: 4,
    precio: 2,
    ubicacion: 4,
    marca: 3,
  },
  {
    name: 'Aficionado al Fitness',
    instalaciones: 4,
    servicio: 3,
    precio: 3,
    ubicacion: 3,
    marca: 2,
  },
  {
    name: 'Senior Activo',
    instalaciones: 3,
    servicio: 5,
    precio: 5,
    ubicacion: 4,
    marca: 4,
  },
  {
    name: 'Ejecutivo Corporativo',
    instalaciones: 4,
    servicio: 5,
    precio: 4,
    ubicacion: 5,
    marca: 5,
  },
  {
    name: 'Recuperación/Terapia',
    instalaciones: 4,
    servicio: 5,
    precio: 3,
    ubicacion: 3,
    marca: 2,
  },
  {
    name: 'Escolar/Joven',
    instalaciones: 3,
    servicio: 2,
    precio: 5,
    ubicacion: 2,
    marca: 1,
  },
];

// Section 4: Producto/Local
export const locations: LocationProperty[] = [
  {
    name: 'Local 1 - Premium Distrito 1',
    superficie: 3500,
    parking: 80,
    ampliacion: 500,
    terraza: 300,
    accesibilidad: 1,
    tipo: 'Centro Comercial',
    estado: 'Reformado',
    alquiler: 25000,
    compra: 2800000,
  },
  {
    name: 'Local 2 - Estándar Distrito 1',
    superficie: 2000,
    parking: 40,
    ampliacion: 0,
    terraza: 100,
    accesibilidad: 1,
    tipo: 'Edificio Independiente',
    estado: 'Buen Estado',
    alquiler: 15000,
    compra: 1500000,
  },
  {
    name: 'Local 3 - Económico Distrito 2',
    superficie: 1500,
    parking: 25,
    ampliacion: 200,
    terraza: 50,
    accesibilidad: 1,
    tipo: 'Centro Comercial',
    estado: 'Necesita Reforma',
    alquiler: 8000,
    compra: 800000,
  },
];

export const facilities: FacilityInvestment[] = [
  { facility: 'Sala Fitness', funcional: 150, estandar: 220, superior: 300 },
  { facility: 'Spa y Masajes', funcional: 200, estandar: 280, superior: 350 },
  { facility: 'Piscina', funcional: 300, estandar: 450, superior: 600 },
  { facility: 'Yoga/Pilates', funcional: 100, estandar: 150, superior: 200 },
  { facility: 'Recuperación', funcional: 180, estandar: 250, superior: 320 },
  { facility: 'Coworking', funcional: 120, estandar: 170, superior: 200 },
  { facility: 'Cafetería', funcional: 80, estandar: 120, superior: 150 },
  { facility: 'Salas Privadas', funcional: 140, estandar: 200, superior: 280 },
];

// Section 5: Marketing
export const marketingActions: MarketingAction[] = [
  { action: 'Buzoneo Masivo', scenario1: 1, scenario2: 2, scenario3: 3 },
  { action: 'Email Marketing', scenario1: 2, scenario2: 1, scenario3: 2 },
  { action: 'Patrocinios/Eventos', scenario1: 4, scenario2: 3, scenario3: 2 },
  { action: 'Acciones B2B Corporativo', scenario1: 1, scenario2: 1, scenario3: 1 },
  { action: 'Redes Sociales', scenario1: 3, scenario2: 2, scenario3: 2 },
  { action: 'Google Ads', scenario1: 2, scenario2: 2, scenario3: 1 },
];

export const marketSegmentShare: MarketSegmentShare[] = [
  { segment: 'Deportista Profesional', scenario1: 5, scenario2: 8, scenario3: 12 },
  { segment: 'Aficionado Fitness', scenario1: 8, scenario2: 15, scenario3: 22 },
  { segment: 'Senior Activo', scenario1: 12, scenario2: 20, scenario3: 28 },
  { segment: 'Ejecutivo Corporativo', scenario1: 18, scenario2: 30, scenario3: 40 },
  { segment: 'Recuperación/Terapia', scenario1: 3, scenario2: 6, scenario3: 10 },
  { segment: 'Escolar/Joven', scenario1: 2, scenario2: 4, scenario3: 8 },
];

// Section 6: Organización
export const activities: ActivityAttraction[] = [
  { activity: 'Yoga y Pilates', scenario1: 7, scenario2: 8, scenario3: 9 },
  { activity: 'Spinning/Ciclo Indoor', scenario1: 8, scenario2: 8, scenario3: 8 },
  { activity: 'Entrenamiento Personal', scenario1: 9, scenario2: 9, scenario3: 9 },
  { activity: 'Aqua Fitness', scenario1: 6, scenario2: 7, scenario3: 8 },
  { activity: 'Nutrición y Coaching', scenario1: 7, scenario2: 8, scenario3: 9 },
  { activity: 'Recuperación/Masajes', scenario1: 8, scenario2: 9, scenario3: 9 },
];

export const staffCosts: StaffDepartment[] = [
  { department: 'Dirección General', scenario1: 102000, scenario2: 102000, scenario3: 102000 },
  { department: 'Monitores Fitness', scenario1: 156000, scenario2: 195000, scenario3: 234000 },
  { department: 'Terapeuta/Spa', scenario1: 84000, scenario2: 105000, scenario3: 126000 },
  { department: 'Nutrición', scenario1: 42000, scenario2: 52500, scenario3: 63000 },
  { department: 'Administración', scenario1: 60000, scenario2: 72000, scenario3: 84000 },
  { department: 'Servicio al Cliente', scenario1: 90000, scenario2: 112500, scenario3: 135000 },
  { department: 'Mantenimiento/Limpieza', scenario1: 108000, scenario2: 135000, scenario3: 162000 },
];

// Section 7: Ingresos
export const revenues: RevenueScenario[] = [
  { scenario: 'Escenario 1 (Conservador)', members: 150, monthlyFee: 65, totalRevenue: 117000 },
  { scenario: 'Escenario 2 (Realista)', members: 250, monthlyFee: 75, totalRevenue: 225000 },
  { scenario: 'Escenario 3 (Optimista)', members: 350, monthlyFee: 85, totalRevenue: 357000 },
];

// Section 8: Operaciones/Financiación
export const balanceItems: BalanceSheetItem[] = [
  { concept: 'Activo Fijo Neto', scenario1: 1050000, scenario2: 1050000, scenario3: 1050000 },
  { concept: 'Activo Circulante', scenario1: 85000, scenario2: 125000, scenario3: 180000 },
  { concept: 'Total Activo', scenario1: 1135000, scenario2: 1175000, scenario3: 1230000 },
  {
    concept: 'Pasivo Corto Plazo Anterior',
    scenario1: 180000,
    scenario2: 0,
    scenario3: 0,
  },
  { concept: 'Préstamo Largo Plazo (750k)', scenario1: 750000, scenario2: 750000, scenario3: 750000 },
  { concept: 'Total Pasivo', scenario1: 930000, scenario2: 750000, scenario3: 750000 },
  { concept: 'Patrimonio Neto', scenario1: 205000, scenario2: 425000, scenario3: 480000 },
];

// Section 10: Primer Periodo
export const firstPeriodIndicators: IndicatorMetric[] = [
  {
    name: 'Patrimonio Neto',
    definition: 'Diferencia entre activos y pasivos. Mide solvencia y valor de propiedad.',
    value: '-150,000€',
    analysis: 'Quiebra técnica. Vulnerabilidad operativa crítica.',
  },
  {
    name: 'Deuda Corto Plazo',
    definition: 'Obligaciones con vencimiento menor a 12 meses. Riesgo de liquidez.',
    value: '280,000€',
    analysis: 'Altamente tóxica. Presión inmediata por reembolso.',
  },
  {
    name: 'Ingresos Mensuales',
    definition: 'Cuotas de afiliación más servicios complementarios.',
    value: '0€',
    analysis: 'Sin actividad operativa. Centro cerrado o no funcional.',
  },
  {
    name: 'Valor de Marca',
    definition: 'Percepción de calidad y diferenciación en el mercado.',
    value: 'Nulo',
    analysis: 'Sin inversión en marketing ni reputación establecida.',
  },
  {
    name: 'Ocupación',
    definition: 'Porcentaje de capacidad utilizada de instalaciones.',
    value: '0%',
    analysis: 'Centro sin miembros ni actividad comercial.',
  },
];

// Section 11: Segundo Periodo
export const secondPeriodComparisons: IndicatorComparison[] = [
  {
    indicator: 'Patrimonio Neto',
    previous: -150000,
    current: 280000,
    objective: 400000,
    status: 'positive',
  },
  {
    indicator: 'Ingresos Anuales',
    previous: 0,
    current: 225000,
    objective: 300000,
    status: 'positive',
  },
  {
    indicator: 'Deuda Corto Plazo',
    previous: 280000,
    current: 0,
    objective: 0,
    status: 'positive',
  },
  {
    indicator: 'Miembros Activos',
    previous: 0,
    current: 250,
    objective: 350,
    status: 'positive',
  },
  {
    indicator: 'Valor de Marca',
    previous: 10,
    current: 65,
    objective: 80,
    status: 'positive',
  },
];

// Section 12: Informe Final
export const resultsCauses: ResultCause[] = [
  {
    result: 'Alta ocupación en target Ejecutivo',
    cause: 'Campañas B2B dirigidas y calidad de servicio premium',
    type: 'positive',
  },
  {
    result: 'Mejora significativa de imagen de marca',
    cause: 'Inversión en instalaciones de calidad superior y experiencia cliente',
    type: 'positive',
  },
  {
    result: 'Estabilidad financiera alcanzada',
    cause: 'Refinanciación con préstamo LP de 750k cancela deuda tóxica',
    type: 'positive',
  },
  {
    result: 'Gastos financieros siguen elevados',
    cause: 'Intereses del nuevo préstamo LP y coste de capital',
    type: 'negative',
  },
  {
    result: 'Resultado neto negativo inicial',
    cause:
      'Amortización de inversiones iniciales (CAPEX) y gastos de marketing agresivo',
    type: 'negative',
  },
  {
    result: 'Presión operativa en márgenes',
    cause:
      'Estructura de costes elevados (salarios, equipamiento) con ingresos aún en crecimiento',
    type: 'negative',
  },
];

// Business Plan Analysis
export const businessPlanAnalysis = {
  title: '9. Plan de Negocio: Justificación de Selección de Escenario',
  introduction:
    'La selección del Escenario 2 (Realista) equilibra crecimiento ambicioso con viabilidad operativa. La estructura propuesta maximiza la captura de demanda premium en Distrito 1 mediante decisiones integradas en Demanda-Producto-Marketing y Organización-Ingresos-Operaciones.',
  demandAnalysis:
    'Enfoque en segmentos de alta rentabilidad (Ejecutivo y Senior) con máxima sensibilidad a Servicio (5/5) y Marca (5/5). Valoración baja de Precio reduce elasticidad y permite premium pricing. Selección de Escenario 2: penetración moderada pero rentable (30% en Ejecutivo vs 18% escenario 1).',
  productAnalysis:
    'Local 1 (3.500 m²) en Distrito 1 como barrera de entrada por tamaño. Superficie soporta zonificación de áreas premium (Fitness-Superior, Spa-Superior, Coworking-Estándar). Inversión CAPEX alineada con posicionamiento: 300€/m² en Fitness Superior señala compromiso con calidad.',
  marketingAnalysis:
    'Saturación local combinada con B2B corporativo. Buzoneo (Alta) capta residentes de alta renta; Acciones B2B (Alta) generan convenios empresariales con tráfico cualificado y recurrente. Presupuesto agresivo (75k€) invierte en posicionamiento de marca premium.',
  organizationAnalysis:
    'Salarios competitivos (Monitor 28€/h vs 6€/h mercado; Dirección 102k€/año) garantizan servicio diferenciado y retención. Organización escalable: Yoga/Pilates/Spinning como pilares, personal training como diferenciador. Coste anual de plantilla 642k€ es inversión crítica en propuesta de valor.',
  revenueAnalysis:
    'Pricing Skimming (Cuota 75€/mes en Escenario 2). Matrícula de entrada 49€ como filtro de calidad. Modelo de pocas plazas a alto margen: 250 miembros * 75€/mes * 12 = 225k€ anuales. Ingresos soportan estructura de costes elevada.',
  operationsAnalysis:
    'Refinanciación crítica: Préstamo LP 750k€ cancela deuda CP tóxica (280k€) y financia CAPEX. Patrimonio Neto positivo (280k€ escenario 2) genera confianza operativa. Pérdidas iniciales (CAPEX + amortización) pero EBITDA positivo valida modelo. Solvencia a medio plazo respaldada.',
  conclusion:
    'Escenario 2 es equilibrio óptimo: demanda rentable, producto estratégico, marketing potente, organización premium, ingresos viables y operaciones estables. No es crecimiento maximalista (Escenario 3), evita riesgos de Escenario 1. Es proyecto de mediano plazo con visión de liderazgo en segmento premium.',
};
