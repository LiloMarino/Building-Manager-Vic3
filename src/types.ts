enum GoodCategory {
  Staple = "staple",
  Industrial = "industrial",
  Luxury = "luxury",
  Military = "military",
}

interface Good {
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
