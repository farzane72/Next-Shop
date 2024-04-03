import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { publicAxios } from "@/services/publicAxios";
import { privateAxios } from "@/services/privateAxios";
import SetCookie from "@/hooks/setCookie";
import { SetLoacalStorage } from "@/hooks/localStorage";
import { PanelType } from "./PanelSliceType";

const initialState: PanelType = {
  users: {
    count_items_current_page: 1,

    count_pages: 0,

    next: "",

    previous: "",

    results: [],

    total_items:0,
  },
  loading: false,
  error: "",
  currentPage: 1,
  usersLength: 0,
};
//---------------------------------------------------------------------------------------------------------------------------------------

export const fetchUsers = createAsyncThunk(
  "panel/fetchUsers",
  //test check she
  async (offset:number, thunkAPI) => {
    console.log(offset);
    const res = await privateAxios.get(`/auth/users/?offset=${offset}&limit=10`);
    // console.log(res);
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
      }),

  //------------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------------------------------
});
//------------------------------------------------------------------------------------------------------------

export default PanelSlice.reducer;
export const {setPage}=PanelSlice.actions
