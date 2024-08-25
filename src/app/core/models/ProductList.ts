interface Location {
  id: string;
  name: string;
  value: string;
  icon: string;
  position: string;
}

interface OptionValue {
  id: string;
  name: string;
  value?: string;  // Optional, as it's only used for colors
  position: number;
}

interface BaseSku {
  location_id: string;
  size_id: string;
  color_id: string;
  location_icon: string;
  location_name: string;
  size_name: string;
  color_name: string;
  sku: string;
  base_cost: number;
  second_side_price: number;
  shipping_cost_us: number;
  shipping_adding_us: number;
  shipping_cost_ww: number;
  shipping_adding_ww: number;
}

interface DropdownGroup {
  label: string;
  icon?: string;
  value?: string;  // Use if there is a value associated with the group
}