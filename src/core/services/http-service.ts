import axios, {AxiosProgressEvent, AxiosRequestConfig,ResponseType, AxiosRequestHeaders, AxiosResponse} from "axios";
import { errorHandler,networkErrorStrategy } from "./http-error-strategies";
import GetCookie from "@/hooks/getCookie"
import SetCookie from "@/hooks/setCookie"
import { ApiError } from "src/types/http-errors.interface";
import { publicAxios } from "./publicAxios"


const httpService = axios.create({
   // baseURL: "https://jsonplaceholder.typicode.com",
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

httpService.interceptors.request.use(
    (config) => {
        //const accessToken = Cookies.get("accessToken");
        const accessToken=GetCookie("access")
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

httpService.interceptors.response.use(
    (response) => {
        return response;
    },
    async  (error) => {
         //const token = Cookies.get("accessToken");
         const originalConfig = error.config


        if (error?.response) {
            const statusCode = error?.response?.status;
            //const apiUrl = error?.response?.config.url;

            if (error.response.status === 401 && !originalConfig._retry){
                originalConfig._retry = true
                try {
                    //const currentRefreshToken = localStorage.getItem("refreshToken")
                    const currentRefreshToken = GetCookie("refresh")
                    
                    const res = await publicAxios.post("/auth/refresh/" , {
                        refresh : currentRefreshToken
                    })
    
                    const accesToken = res.data.access
    
                    if (accesToken){
                       // localStorage.setItem("accessToken" , accesToken)
                       SetCookie("access" , accesToken)
                        return httpService(originalConfig)
                    }
    
    
                }catch (err:any){
                    if(err.status===401)
                    {
                        window.location.href="/account/loginWithPassword"
                    }
    
                }
            }







            // if (statusCode === 401) {
            
            //     if (apiUrl.includes("users/show")) {
            //         if (token) {
            //             window.location.reload()
            //         }
            
            //         Cookies.remove("accessToken");
            //     }
            // }

            if (statusCode === 422) {
                // throw new ValidationError(error.response.data.errors);
            } else if (statusCode >= 400) {
                const errorData: ApiError = error.response?.data;

                errorHandler[statusCode](errorData);
            }
        } else {
            networkErrorStrategy();
        }
    }
);


async function apiBase<T>(
    url: string,
    options?: AxiosRequestConfig
): Promise<T> {
    const response: AxiosResponse = await httpService(url, options);
    return response.data as T;
}

async function readData<T>(
    url: string,
    headers?: AxiosRequestHeaders,
    type?: ResponseType
): Promise<T> {
    const options: AxiosRequestConfig = {
        headers: headers,
        method: "GET",
        responseType : type
    };
    return await apiBase<T>(url, options);
}

async function createData<TModel, TResult>(
    url: string,
    data: TModel,
    headers?: AxiosRequestHeaders,
    uploadProgress?: (progressEvent: AxiosProgressEvent) => void
): Promise<TResult> {
    const options: AxiosRequestConfig = {
        method: "POST",
        headers: headers,
        data: data,
        onUploadProgress: uploadProgress,
    };

    return await apiBase<TResult>(url, options);
}

async function updateData<TModel, TResult>(
    url: string,
    data: TModel,
    headers?: AxiosRequestHeaders
): Promise<TResult> {
    const options: AxiosRequestConfig = {
        method: "PUT",
        headers: headers,
        data: JSON.stringify(data),
    };

    return await apiBase<TResult>(url, options);
}

async function patchData<TModel, TResult>(
    url: string,
    data: TModel,
    headers?: AxiosRequestHeaders
): Promise<TResult> {
    const options: AxiosRequestConfig = {
        method: "PATCH",
        headers: headers,
        data: JSON.stringify(data),
    };

    return await apiBase<TResult>(url, options);
}

async function deleteData(
    url: string,
    headers?: AxiosRequestHeaders
): Promise<void> {
    const options: AxiosRequestConfig = {
        method: "DELETE",
        headers: headers,
    };

    return await apiBase(url, options);
}

export {createData, readData, updateData, deleteData, patchData};
