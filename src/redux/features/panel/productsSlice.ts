import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetProductType,
  ProductsSliceType,
  AddProductType,
  DetailProductType,
} from "./ProductsSliceType";
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
  currentPage: 1,
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
      `/store/products/?offset10=&limit=10`
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
//   async (data: AddProductType, thunkAPI) => {
//     const res = await privateAxios.put(`/store/products/${id}/`,data);
//     console.log(res.data);
//     return res.data;
//   }
// );
export const fetchDeleteUser = createAsyncThunk(
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
    // setPage(state, action: PayloadAction<number>) {
    //   state.currentPage = action.payload;
    // },

    setAddOrEdit(state, action: PayloadAction<string>) {
      state.addOrEdit = action.payload;
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
      }),

  //----------------------------------------------------------------------------------------------------------------------
});
//------------------------------------------------------------------------------------------------------------

export default ProductsSlice.reducer;
export const { setAddOrEdit } = ProductsSlice.actions;

//export const productsSelected=(store:ProductsSliceType) => store.products