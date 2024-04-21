export interface GetCategoryType {
  id: number;
  title: string;
  sub_category: null;
}
export interface ImageType{
   
      id: number;
      image: string;
      name: string;
    
}
export interface GetProductType {
  id: number;
  title: string;
  slug: string;
  category: GetCategoryType;
  thumbnail: ImageType,
  seller: string;
  price: number;
  viewer: number;
  status: string;
}
export interface DetailProductType {
  id: number;
  title: string;
  slug: string;
  category: GetCategoryType;
  thumbnail: null;
  seller: {
    id: number;
    first_name: string;
    last_name: string;
    company_name: string;
    gender: string;
  };
  price: number;
  viewer: number;
  status: string;
  images: ImageType[];
  inventory: number;
  description: string;
  specifications: {};
  comments: [];
}
export interface ProductsType {
  count_items_current_page: number;

  count_pages: number;

  next: string;

  previous: string;

  results: GetProductType[];

  total_items: number;
}

export interface AddProductType {
  title: string;
  category: number
  //category: number|GetCategoryType;
  price: number;
  inventory: number;
  description: string;
  specifications: {};
  image_ids: number[] ;
  //image_ids: number[] |ImageType[];
}

export interface CategoriesType {
  count_items_current_page: number;

  count_pages: number;

  next: string;

  previous: string;

  results: GetCategoryType[];

  total_items: number;
}

export interface ProductsSliceType {
  products: ProductsType;
  loading: boolean;
  error: any;
  currentPage: number;
  categories: CategoriesType;
  addOrEdit: string;
  product: DetailProductType;
}
