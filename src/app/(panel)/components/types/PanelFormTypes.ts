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
export type ProductEditType = {
  id:number,
  title: string;
  category:any,
  // category:string|number|{
  //   id: number;
  //   title: string;
  //   sub_category: null;
  // };

  price: number;
  inventory: number;
  description: string;
  specifications: any;

  image_ids:  ImageType[];
  newSpecifications:any,
  setNewSpecifications:any
};

export type InitialProductType = {
  title: string;
  category:any,
  //category:number
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

export type InitialEditProductType = {
  id:number,
  title: string;
  category:string|number|{
        id: number;
        title: string;
        sub_category: null;
      };
  price: number;
  inventory: number;
  description: string;
  specifications: {};

  image_ids:ImageType[];
  newSpecifications:any,
  setNewSpecifications:any
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
  images: number[]
  // |ImageType[];
  setImages: any,
  image_ids:ImageType[]
}
// export interface DetailProductType {
//   id: number;
//   title: string;
//   slug: string;
//   category: GetCategoryType;
//   thumbnail: null;
//   seller: {
//     id: number;
//     first_name: string;
//     last_name: string;
//     company_name: string;
//     gender: string;
//   };
//   price: number;
//   viewer: number;
//   status: string;
//   images: ImageType[];
//   inventory: number;
//   description: string;
//   specifications: {};
//   comments: [];
// }