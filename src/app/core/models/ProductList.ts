export interface ProductList {
  brandName: string;
  model: string;
  name: string;
  createAt: string;
  uri: number;
  product_id: string;
  printProvider: PrintProvider;
  minPrice: number;
  tags: string[];
  totalColors: number;
  totalSizes: number;
  media: Media[];
  analytics: Analytics;
  paginatedResponse:PaginatedResponse;
}

export interface Analytics {
  rate: number;
  profitScore: number;
  trendingScore: number;
}
export interface PrintProvider {
  totalProvider: number;
  ProviderName: string[];
}
export interface Media {
  type: string;
  src: string;
}
 export interface PaginatedResponse {
  products: ProductList[];
  per_page: number;
  total: number;
  last_page: number;
  from: number;
  to: number;
  current_page: number;
}
