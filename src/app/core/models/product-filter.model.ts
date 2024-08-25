import { Tags } from './product.model';

export interface productFilter {
  analytics: Analytics;
  brandName: string;
  createAt: string;
  firstImg: string;
  secondImg: string;
  minPrice: number;
  model: string;
  name: string;
  printProvider: PrintProvider;
  product_id: string;
  tags: Tags[];
  totalColors: number;
  totalSizes: number;
}

interface Analytics {
  profitScore: number;
  rate: number;
  trendingScore: number;
}

interface PrintProvider {
  ProviderName: string[];
  totalProvider: number;
}
