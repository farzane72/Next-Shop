import axios from "axios"
import GetCookie from "@/hooks/getCookie"
import SetCookie from "@/hooks/setCookie"
import { publicAxios } from "./publicAxios"

const privateAxios=axios.create({
    //baseURL:import.meta.env.VITE_BASE_URL
    baseURL: process.env.NEXT_PUBLIC_BASE_URL

})
privateAxios.interceptors.request.use((config)=>{

    //const accessToken=localStorage.getItem("accessToken")
    const accessToken:any=GetCookie("access")

    if(accessToken){
        config.headers.Authorization=`Bearer ${accessToken}`
    }

return config
},(error)=>{
    return Promise.reject(error)
})

privateAxios.interceptors.response.use((res)=> {


    return res
}, async (error)=>{
    const originalConfig = error.config

    if (error.response){
        if (error.response.status === 401 && !originalConfig._retry){
            originalConfig._retry = true
            try {
                //const currentRefreshToken = localStorage.getItem("refreshToken")
                const currentRefreshToken = GetCookie("refresh")

                const res = await publicAxios.post("auth/refresh/" , {
                    refresh : currentRefreshToken
                })

                const accesToken = res.data.access

                if (accesToken){
                   // localStorage.setItem("accessToken" , accesToken)
                   SetCookie("access" , accesToken)
                    return privateAxios(originalConfig)
                }


            }catch (err:any){
                if(err.status===401)
                {
                    window.location.href="/account/login"
                }

            }
        }
    }
})

export {privateAxios}