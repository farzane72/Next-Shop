import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { publicAxios } from "@/services/publicAxios";
import { privateAxios } from "@/services/privateAxios";
import SetCookie from "@/hooks/setCookie";
import { SetLoacalStorage } from "@/hooks/localStorage";
import { PanelType, AddUserType,EditUserType } from "./PanelSliceType";

const initialState: PanelType = {
  users: {
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

  user: {
    phone: "",
    email: "",
    id: 0,
    role: "",
    has_password: false,
  },
};
//---------------------------------------------------------------------------------------------------------------------------------------

export const fetchUsers = createAsyncThunk(
  "panel/fetchUsers",
  //test check she
  async (offset: number, thunkAPI) => {
    console.log(offset);
    const res = await privateAxios.get(
      `/auth/users/?offset=${offset}&limit=10`
    );
    // console.log(res);
    return res.data;
  }
);
export const fetchAddUser = createAsyncThunk(
  "panel/fetchAddUser",
  async (data: AddUserType, thunkAPI) => {
    console.log(data);
    const res = await privateAxios.post("/auth/users/", data);
    console.log(res.data);
    return res.data;
  }
);

export const fetchGetUser = createAsyncThunk(
  "panel/fetchGetUser",
  async (id: string, thunkAPI) => {
    const res = await privateAxios.get(`/auth/users/${id}/`);
    console.log(res.data);
    return res.data;
  }
);
export const fetchUpdateUser = createAsyncThunk(
  "panel/fetchUpdateUser",
  async (data:EditUserType, thunkAPI) => {
    const res = await privateAxios.put(`/auth/users/${data.id}/`,{email:data.email});
    console.log(res.data);
    return res.data;
  }
);
export const fetchDeleteUser = createAsyncThunk(
  "panel/fetchDeleteUser",
  async (id:number, thunkAPI) => {
    const res = await privateAxios.delete(`/auth/users/${id}/`);
    console.log(res.data);
    return res.data;
  }
);

//---------------------------------------------------------------------------------------------------------------------------

export const PanelSlice = createSlice({
  name: "panel",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setAddOrEdit(state, action: PayloadAction<string>) {
      state.addOrEdit = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder

      .addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        // state.tasks = [...state.tasks, action.payload];
        console.log(action.payload);
        state.users = action.payload;

        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.payload;
      })

      //------------------------------------------------------------------------------------------------------------------------
      .addCase(fetchAddUser.pending, (state, action) => {
        // state.loading = true;
      })
      .addCase(fetchAddUser.fulfilled, (state, action) => {
        // state.tasks = [...state.tasks, action.payload];
        console.log(action.payload);
        // state.users = action.payload;

        // state.loading = false;
      })
      .addCase(fetchAddUser.rejected, (state, action) => {
        state.error = action.payload;
      })

      //----------------------------------------------------------------------------------------------------------------------
      .addCase(fetchGetUser.pending, (state, action) => {
        // state.loading = true;
      })
      .addCase(fetchGetUser.fulfilled, (state, action) => {
        // state.tasks = [...state.tasks, action.payload];
        console.log(action.payload);
        state.user = action.payload;

        // state.loading = false;
      })
      .addCase(fetchGetUser.rejected, (state, action) => {
       // state.error = action.payload;
      }),

  //----------------------------------------------------------------------------------------------------------------------
});
//------------------------------------------------------------------------------------------------------------

export default PanelSlice.reducer;
export const { setPage, setAddOrEdit } = PanelSlice.actions;
