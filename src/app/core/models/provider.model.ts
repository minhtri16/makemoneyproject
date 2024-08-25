export interface ModifiedResponse {
  optionKeys: string[];
  inside: ProviderInfo;
  outside: Provider;
}

export interface ProviderInfo {
  product_variants: Variants[];
  shipping: ShippingDetails[];
  branding?: BrandingFeatures[];
  production?: Production[];
}

export interface Variants {
  inventory: string;
  price: number;
  options: Option;
}

interface Option {
  color?: Colors;
  size?: string;
}

interface ShippingDetails {
  minDelivery: number;
  country: string;
  method: string;
  type: string;
  first: string;
  addition: string;
  maxDelivery: number;
}

interface BrandingFeatures {
  type: string;
  content: string;
  img: string;
  price: number;
}

interface Production {
  type: string;
  content: string;
  img: string;
}

export interface Provider {
  name: string;
  scoring: Scoring;
  tags: Tags[];
  location: Location;
  minimumShippingFirst: string;
  shipping: Shipping[];
  average_production: number;
  printPosition: PrintPosition[];
  totalSizes: number;
  sizes: Sizes;
  totalColors: number;
  colors: Colors[];
  minPrice: number;
}

interface Scoring {
  average: number;
  production_speed: number;
  quality: number;
  stock_reliability: number;
}

interface Tags {
  tagName: string;
}

interface Location {
  country_code: string;
  country_name: string;
}

interface Shipping {
  shippingName: string;
  value: string;
}

interface PrintPosition {
  print_areas: string;
}

interface Sizes {
  min_size: string;
  max_size: string;
}

interface Colors {
  name: string;
  hex: string;
}
