import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetProductType,
  ProductsSliceType,
  AddProductType,
  DetailProductType,
  UpdateType,
  ProductsType,
  CategoriesType
} from "@/types/ProductsType";

import { publicAxios } from "@/services/publicAxios";
import { privateAxios } from "@/services/privateAxios";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductsSliceType = {
  products: {
    count_items_current_page: 1,
    count_pages: 0,
    next: "",
    previous: "",
    results: [],
    total_items: 0,
  },
  loading: false,
  error: "",
  itemOffset: 0,
  addOrEdit: "",
  categories: {
    count_items_current_page: 1,
    count_pages: 0,
    next: "",
    previous: "",
    results: [],
    total_items: 0,
  },
  product: {
    id: 0,
    title: "",
    slug: "",
    category: {
      id: 0,
      title: "",
      sub_category: null,
    },
    thumbnail: null,
    seller: {
      id: 0,
      first_name: "",
      last_name: "",
      company_name: "",
      gender: "",
    },
    price: 0,
    viewer: 0,
    status: "",
    images: [
      {
        id: 0,
        image: "",
        name: "",
      },
    ],
    inventory: 0,
    description: "",
    specifications: {},
    comments: [],
  },
};

//---------------------------------------------------------------------------------------------------------------------------------
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  //test check she
  async (offset: number, thunkAPI) => {
    console.log(offset);
    const res = await privateAxios.get(
      //${offset}
      `/store/products/?offset=${offset}&limit=10`
    );
    // console.log(res);
    return res.data;
  }
);
export const fetchAddProduct = createAsyncThunk(
  "products/fetchAddProduct",
  async (data: AddProductType, thunkAPI) => {
    console.log(data);
    const res = await privateAxios.post("/store/products/", data);
    console.log(res.data);
    return res.data;
  }
);

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  //test check she
  async (offset: number, thunkAPI) => {
    console.log(offset);
    const res = await privateAxios.get(
      `/store/categories/?offset=${offset}&limit=10`
    );
    // console.log(res);
    return res.data;
  }
);
//-------------------------------------------------------------------------------------------------------------------------
export const fetchGetProduct = createAsyncThunk(
  "products/fetchGetProduct",
  async (id: string, thunkAPI) => {
    const res = await privateAxios.get(`/store/products/${id}/`);
    console.log(res.data);
    return res.data;
  }
);
// export const fetchUpdateProduct = createAsyncThunk(
//   "products/fetchUpdateProduct",
//   async ({data,id}:UpdateType, thunkAPI) => {
//     const res = await privateAxios.put(`/store/products/${id}/`,data);
//     console.log(res.data);
//     return res.data;
//   }
// );
export const fetchDeleteProduct = createAsyncThunk(
  "products/fetchDeleteProduct",
  async (id: number, thunkAPI) => {
    const res = await privateAxios.delete(`/store/products/${id}/`);
    console.log(res.data);
    return res.data;
  }
);
//-----------------------------------------------------------------------------------------------------------------------------

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.itemOffset = action.payload;
    },

    //setAddOrEdit(state, action: PayloadAction<string>) {
    //  state.addOrEdit = action.payload;
    // },
    
    setProducts(state, action: PayloadAction<ProductsType>){
      state.products=action.payload;
    },

    setProductDetail(state, action: PayloadAction<DetailProductType>){
      state.product=action.payload;
    },

    setCategories(state, action: PayloadAction< CategoriesType>){
      state.categories=action.payload;
    },



  },
  extraReducers: (builder) =>
    builder

      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // state.tasks = [...state.tasks, action.payload];
        console.log(action.payload);
        state.products = action.payload;

        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
      })

      //------------------------------------------------------------------------------------------------------------------------
      .addCase(fetchCategories.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        // state.tasks = [...state.tasks, action.payload];
        console.log(action.payload);
        state.categories = action.payload;

        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload;
      })

      //----------------------------------------------------------------------------------------------------------------------
      .addCase(fetchAddProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAddProduct.fulfilled, (state, action) => {
        // state.tasks = [...state.tasks, action.payload];
        // console.log(action.payload);
        // state.categories = action.payload;

        state.loading = false;
      })
      .addCase(fetchAddProduct.rejected, (state, action) => {
        state.error = action.payload;
      })
      //-------------------------------------------------------------------------------------------------------------------

      .addCase(fetchGetProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchGetProduct.fulfilled, (state, action) => {
        console.log(action.payload);
        state.product = action.payload;

        state.loading = false;
      })
      .addCase(fetchGetProduct.rejected, (state, action) => {
        // state.error = action.payload;
      })

  //----------------------------------------------------------------------------------------------------------------------
//   .addCase(fetchUpdateProduct.pending, (state, action) => {
//     state.loading = true;
//   })
//   .addCase(fetchUpdateProduct.fulfilled, (state, action) => {
    

//     state.loading = false;
//   })
//   .addCase(fetchUpdateProduct.rejected, (state, action) => {
//     state.error = action.payload;
//   })
 });
//------------------------------------------------------------------------------------------------------------

export default ProductsSlice.reducer;
export const { setPage,setProducts,setProductDetail,setCategories } = ProductsSlice.actions;

//export const productsSelected=(store:ProductsSliceType) => store.products
//setAddOrEdit,