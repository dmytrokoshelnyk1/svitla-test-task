type MetaDataT = {
  created: string
  modified: string
  user: {
    id: string
    username: string
  }
}
type CustomerT = {
  id: string
  code: string
}
type PropertiesT = {
  name: string
  value: {
    string: string
    number: number
  }
}
type ManufactureT = {
  id: string
  name: string
}
type MaterialT = {
  aluminum: number
  copper: number
  weight: {
    net: ValveUnitTypesT
    calculated: ValveUnitTypesT
  }
}
type InsulationT = {
  type: string
  shield: string
  jacket: string
  thickness: {
    value: number
    unit: string
  }
}
type ConductorT = {
  number: number
  size: {
    value: number
    unit: string
  }
}
type ValveUnitTypesT = {
  value: number
  unit: string
}
type DiameterT = {
  published: ValveUnitTypesT
  actual: ValveUnitTypesT
}
export type EntriT = {
  id: string
  identifier: string
  catid: number
  diameter: DiameterT
  conductor: ConductorT
  insulation: InsulationT
  material: MaterialT
  currentPrice: ValveUnitTypesT
  voltage: ValveUnitTypesT
  rotationFrequency: ValveUnitTypesT
  manufacturer: ManufactureT
  properties: PropertiesT[]
  customer: CustomerT
  metadata: MetaDataT
}
export type MockDataResponseT = {
  entities: EntriT[]
  total: number
  page: number
  next: string
}
