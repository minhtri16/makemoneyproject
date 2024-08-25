export interface Product {
  product_id: string;
  tag: Tags[];
  suggested: string;
  type: string;
  media: Media[];
  info: Info;
  summary: Summary;
}

export interface Tags {
  tagName: string;
}

export interface Media {
  type: string;
  src: string;
}

export interface Info {
  about: string;
  key_features: keyFeatures[];
  care_instructions: careInstructions[];
  size_guide: sizeGuide;
}

export interface Summary {
  name: string;
  model: string;
  brand_name: string;
  details: string;
}

interface keyFeatures {
  name: string;
  description: string;
  image: string;
}

interface careInstructions {
  set: string;
  icon: string;
  option: string;
}

export interface sizeGuide {
  tableData: any[];
  sizes: any[];
}
