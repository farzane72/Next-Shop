export type UserType = {
  phone?: string;
  email: string;
  id: number;
  role?: string;
  has_password?: Boolean;
};
export interface ParamsProps {
  params: {
    userId: string;
  };
}
export interface ParamsProduct {
  params: {
    productId: string;
  };
}
export interface ToastPropsType {
  id: number;
  title: string;
  question: string;
  type: string;
}
export interface ImageType {
  id: number;
  image: string;
  name: string;
}

export type ProductType = {
  title: string;
  category:
     number
    // | {
    //     id: number;
    //     title: string;
    //     sub_category: null;
    //   };

  price: number;
  inventory: number;
  description: string;
  specifications: any;

  image_ids: number[]
  //  | ImageType[];
};

export type InitialProductType = {
  title: string;
  category:number
    // | {
    //     id: number;
    //     title: string;
    //     sub_category: null;
    //   };
  price: number;
  inventory: number;
  description: string;
  specifications: {};

  image_ids: number[]
  // |ImageType[];
};

export interface FileType {
  lastModified: number;

  lastModifiedDate: Date;

  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}
export interface UploderType {
  file: FileType;
  length: number;
}
export interface ImageProductProps {
  image_ids: number[]
  // |ImageType[];
  setImage_ids: any;
}
