// ===== TIPOS BASE =====
export interface DemandSegment {
  name: string;
  instalaciones: number;
  servicio: number;
  precio: number;
  ubicacion: number;
  marca: number;
}

export interface LocationProperty {
  name: string;
  superficie: number;
  parking: number;
  ampliacion: number;
  terraza: number;
  accesibilidad: number;
  tipo: string;
  estado: string;
  alquiler: number;
  compra: number;
}

export interface FacilityInvestment {
  facility: string;
  funcional: number;
  estandar: number;
  superior: number;
}

export interface MarketingAction {
  action: string;
  scenario1: number;
  scenario2: number;
  scenario3: number;
}

export interface MarketSegmentShare {
  segment: string;
  scenario1: number;
  scenario2: number;
  scenario3: number;
}

export interface ActivityAttraction {
  activity: string;
  scenario1: number;
  scenario2: number;
  scenario3: number;
}

export interface StaffDepartment {
  department: string;
  scenario1: number;
  scenario2: number;
  scenario3: number;
}

export interface RevenueScenario {
  scenario: string;
  members: number;
  monthlyFee: number;
  totalRevenue: number;
}

export interface BalanceSheetItem {
  concept: string;
  scenario1: number;
  scenario2: number;
  scenario3: number;
}

export interface IndicatorMetric {
  name: string;
  definition: string;
  value: string | number;
  analysis: string;
}

export interface IndicatorComparison {
  indicator: string;
  previous: number;
  current: number;
  objective: number;
  status: "positive" | "negative" | "neutral";
}

export interface ResultCause {
  result: string;
  cause: string;
  type: "positive" | "negative";
}

export interface StrategicCharacteristic {
  aspect: string;
  description: string;
}

export interface SectionData {
  id: number;
  title: string;
  type: "text" | "table" | "doublechart" | "analysis";
  content: string;
}
