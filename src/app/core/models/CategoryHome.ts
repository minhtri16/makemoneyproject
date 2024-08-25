// Định nghĩa cho item bên trong danh mục
export interface CatalogItem {
  label: string;
  image: string;
  uri: string;
}

// Định nghĩa cho danh mục chính
export interface CatalogCategory {
  label: string;
  uri: string;
  items: CatalogItem[];
}
export type CatalogResponse = CatalogCategory[];
