interface Item {
  label: string;
  image: string | null;
  uri: string;
  routerLink?: string;
}

interface Category {
  items: Item[];
}

export type Catalog = Category[][];
