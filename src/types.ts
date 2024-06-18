export enum GoodCategory {
  Staple = "staple",
  Industrial = "industrial",
  Luxury = "luxury",
  Military = "military",
}

export interface Good {
  name_id: string;
  name_loc: string;
  texture_path: string;
  category: GoodCategory;
  cost: number;
  traded_quantity?: number;
  consumption_tax_cost?: number;
  local: boolean;
  tradeable: boolean;
  fixed_price: boolean;
}

export enum BuildingGroupCategory {
  Urban = "urban",
  Rural = "rural",
  Development = "development",
}

export interface BuildingGroup {
  name_id: string;
  name_loc: string;
  parent_group?: string;
  always_possible: boolean;
  economy_of_scale: boolean;
  stateregion_max_level: boolean;
  is_subsistence: boolean;
  is_government_funded: boolean;
  cash_reserves_max?: number;
  urbanization: number;
}

export enum BuildingCityType {
  City = "city",
  Farm = "farm",
  Mine = "mine",
  Port = "port",
  Wood = "wood",
}

export interface Building {
  name_id: string;
  name_loc: string;
  building_group: BuildingGroup;
  texture_path: string;
  buildable: boolean;
  expandable: boolean;
  downsizeable: boolean;
  unique: boolean;
  port: boolean;
  city_type: BuildingCityType;
  levels_per_mesh: number;
  production_method_groups: ProductionMethodGroup[];
  required_construction: number;
}

export type AISelection = "most_productive" | "most_profitable";

export interface ProductionMethodGroup {
  name_id: string;
  name_loc: string;
  texture_path: string;
  ai_selection: AISelection;
  production_methods: ProductionMethod[];
}

export enum Employment {
  Academics = "academics",
  Aristocrats = "aristocrats",
  Bureaucrats = "bureaucrats",
  Capitalists = "capitalists",
  Clergymen = "clergymen",
  Clerks = "clerks",
  Engineers = "engineers",
  Farmers = "farmers",
  Laborers = "laborers",
  Machinists = "machinists",
  Officers = "officers",
  Peasants = "peasants",
  Shopkeepers = "shopkeepers",
  Slaves = "slaves",
  Soldiers = "soldiers"
}

type Effects = Good | Employment

export interface ProductionMethod {
  name_id: string;
  name_loc: string;
  texture_path: string;
  workforce_scaled: Effects[]
  level_scaled: Effects[]
  unscaled?: Effects[]
  pollution_generation: number;
}
