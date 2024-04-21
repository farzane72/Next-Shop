import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./features/account/loginSlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PanelSlice } from "./features/panel/panelSlice";
import { ProductsSlice } from "./features/panel/productsSlice";



export const store=configureStore({
    reducer:{
        login:LoginSlice.reducer,
        panel:PanelSlice.reducer,
        products:ProductsSlice.reducer,
    }
})
export const useAppDispatch:()=>typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType <typeof store.getState>>=useSelector
