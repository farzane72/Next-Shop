
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { publicAxios } from "@/services/publicAxios";
import { privateAxios } from "@/services/privateAxios";
import SetCookie from "@/hooks/setCookie";
import { SetLoacalStorage } from "@/hooks/localStorage";
interface LoginType{
    phone:string,
    password?:string,
    request_id?:string
    error?:string,
    loading?:Boolean
    username?:string,
    currentUrl?:string
}
interface SetPassType{
  
  password:string,
  username?:string
  
}
interface LoginWithPassType{
  
  password:string,
  username:string
  
}
const initialState:LoginType  ={
    phone:"",
    password:"",
    request_id:"",
    loading:false,
    error:"",
    username:"",
    currentUrl:""

}
export const fetchLogin = createAsyncThunk(
    "login/fetchLogin",
    async (phone:LoginType, thunkAPI) => {
      //console.log(phone);
      const res = await publicAxios.post("/auth/otp/",phone) 
     // console.log(res);
      return ({...res.data,...phone});
    }
  );
  export const fetchLoginWithPhone= createAsyncThunk(
    "login/fetchLoginWithPhone",
    async ({phone,password,request_id}:LoginType, thunkAPI) => {
      console.log({phone:phone,password:password,request_id:request_id});
      const res = await publicAxios.post("/auth/otp/verify/",{phone:phone,password:password,request_id:request_id}) 
      console.log(res);
      return (res.data);
    }
  );
  export const fetchSetPassword= createAsyncThunk(
    "login/fetchSetPassword",
    async (password: SetPassType, thunkAPI) => {
      console.log(password);
      const res = await privateAxios.post("/auth/set_password/",password) 
      console.log(res);
      return (res.data);
    }
  );
  export const fetchLoginWithPassword= createAsyncThunk(
    "login/fetchLoginWithPassword",
    async (data:LoginWithPassType, thunkAPI) => {
      console.log(data);
      const res = await publicAxios.post("/auth/login/",data) 
      console.log(res.data);
      return (res.data);
    }
  );

export const LoginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{
        setPassword (state,action:PayloadAction<string>){
          state.password=action.payload
        },
        setError(state,action:PayloadAction<string>){
          state.error=action.payload
        },
        setCurrentUrl(state,action:PayloadAction<string>){
          state.currentUrl=action.payload
        }
    },
    extraReducers: (builder) =>
    builder

      

      .addCase(fetchLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        // state.tasks = [...state.tasks, action.payload];
        console.log(action.payload);
        state.phone=action.payload.phone
        state.request_id=action.payload.request_id
        console.log(action.payload.phone);
        SetLoacalStorage("phone",action.payload.phone)
         state.loading = false;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        // state.errors = action.payload
      })

      //------------------------------------------------------------------------------------------------------------------------
      .addCase(fetchLoginWithPhone.pending, (state, action) => {
        
         state.loading = true;
       })
       .addCase(fetchLoginWithPhone.fulfilled, (state, action) => {
        SetCookie("refresh",action.payload.refresh)
        SetCookie("access",action.payload.access)
        state.loading = false;
        
         
       })
       .addCase(fetchLoginWithPhone.rejected, (state, action) => {
         // state.errors = action.payload
       })
       //----------------------------------------------------------------------------------------------------------------------
       .addCase(fetchSetPassword.pending, (state, action) => {
        
         state.loading = true;
       })
       .addCase(fetchSetPassword.fulfilled, (state, action) => {
        SetLoacalStorage("password","hasPassword")
        state.loading = false;
       })
       .addCase(fetchSetPassword.rejected, (state, action) => {
        console.log( action.payload);
         // state.errors = action.payload
       })
       //----------------------------------------------------------------------------------------------------------------------
       .addCase(fetchLoginWithPassword.pending, (state, action) => {
        
         state.loading = true;
       })
       .addCase(fetchLoginWithPassword.fulfilled, (state, action) => {
        SetCookie("refresh",action.payload.refresh)
        SetCookie("access",action.payload.access)
        
        state.loading = false;
         
       })
       .addCase(fetchLoginWithPassword.rejected, (state, action) => {
         // state.errors = action.payload
         console.log( action.payload);
       })
      })
      //------------------------------------------------------------------------------------------------------------

      


export default LoginSlice.reducer
export const {setPassword,setError,setCurrentUrl}=LoginSlice.actions
//loginWithPhone,loginWithPassword