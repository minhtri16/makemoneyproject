export interface Image {
  media_type: string;
  src: string;
}

export interface Analytics {
  rated_score: number;
  trending_score: number;
  profit_makers_score: number;
}

export interface ProductHome {
  product_id: string;
  brand_name: string;
  create_at: string;
  model: string | null;
  name: string;
  print_provider_names: string[];
  min_price: number;
  min_price_subscription: number;
  sizes_count: number;
  colors_count: number;
  provider_count: number;
  tags: string[] | null;
  target_market: string[];
  images: Image[];
  analytics: Analytics;
}
