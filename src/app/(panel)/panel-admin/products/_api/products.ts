import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query";
import { readData,deleteData,createData,updateData } from "@/services/http-service";
import { AddProductType,UpdateType,GetProductType } from "@/types/ProductsType";
import {  redirect } from 'next/navigation';
import toast from "react-hot-toast";

//---------------------------FUNCTIONS--------------------------------------------------------------------------------------------

const getProducts = ( itemOffset:number): Promise<any> => {
    const url = `/store/products/?offset=${itemOffset}&limit=10`
    return readData(url);
};

const getProductDetail = (id:number): Promise<any> => {
    const url = `/store/products/${id}/`;
    return readData(url);
};

const deleteProduct =(id:number):Promise<any>=>{
    const url = `/store/products/${id}/`;
    return deleteData(url);

}

const addProduct =(data:AddProductType): Promise<any>=>{
    const url = `/store/products/`;
    return createData(url,data);

}

const editProduct =(data:UpdateType): Promise<any>=>{
    const url = `/store/products/${data.id}/`;
    return updateData(url,data);

}

const getCategories = ( itemOffset:number): Promise<any> => {
    const url = `/store/categories/?offset=${itemOffset}&limit=10`
    return readData(url);
};
//--------------------------------------------HOOKS-------------------------------------------------------------------------------
export const useGetProducts = ( itemOffset:number) => {
    
    const{isPending,data,isSuccess}=useQuery({
        queryKey: ["Products", itemOffset],
        queryFn: () => getProducts( itemOffset),
        // staleTime: 2 * 60 * 60 * 1000,
        gcTime: 6 * 60 * 60 * 1000,
    });
    return {data,isPending,isSuccess}
};


export const useProductDetail = (id:number) => {
  const{isPending,data,isSuccess}=useQuery({
    queryKey:['Product',id],
    queryFn:()=>getProductDetail(id)
  })

  return {data,isPending,isSuccess}
};



export const useDeleteProduct=() =>{
    const client=useQueryClient()
    const {mutate ,mutateAsync}=useMutation({
        mutationKey:['DeleteProduct'],
        mutationFn:(id:number)=>deleteProduct(id),
        // onMutate:(data)=>{
        //     const oldState=client.getQueryData(['DeleteUser'])
        //     if(oldState){
        //         const newData=oldState.pages[0].results.filter(e=>e.id !== data.id)
        //         client.setQueryData([''],{
        //             curretPage:oldState.currentPage,
        //             
        //         })
        //     }
        //     return oldState

        // },
        onError:(e,y,context)=>{
            client.setQueryData(['Products'],context)
        },
        onSuccess:()=>{
            client.invalidateQueries({queryKey:['Products']})
            toast.success("محصول شما با موفقیت حذف گردید")
            
           

        }
       
    })
    return {mutate,mutateAsync}
    
}

export const useAddProduct=() =>{
    const client=useQueryClient()
    const {mutate ,mutateAsync,isPending}=useMutation({
        mutationKey:['AddUser'],
        mutationFn:(data:AddProductType)=>addProduct(data),
        
        onError:(e:AddProductType,y,context)=>{
            client.setQueryData(['users'],context)
            //toast.error("وجود خطا در ثبت کاربر جدید");
            console.log(context);
            console.log(e);
        //    if(e.email)
        //     {
        //         toast.error(`${e.email}`);
        //     }
                
        //     if(e.phone)
        //         {toast.error(`${e.phone}`);}

        
        },
        onSuccess:()=>{
            client.invalidateQueries({queryKey:['AddUser']})
            toast.success("محصول جدید با موفقیت اضافه شد");
           

        }
       
    })
    return {mutate,mutateAsync,isPending}
    
}

export const useEditProduct=() =>{
    const client=useQueryClient()
    const {mutate ,mutateAsync,isPending}=useMutation({
        mutationKey:['EditProduct'],
        mutationFn:(data:UpdateType)=>editProduct(data),
        
        onError:(e:UpdateType,y,context)=>{
            client.setQueryData(['Products'],context)
          //  toast.error("وجود خطا در ویرایش کاربر ");
           console.log(e);
        //    if(e.email)
        //     {
        //         toast.error(`${e.email}`);
        //     }
                
        //     if(e.phone)
        //         {toast.error(`${e.phone}`);
        // }


           
     
        
        },
        onSuccess:()=>{
            client.invalidateQueries({queryKey:['EditProduct']})
           // toast.success("کاربر با موفقیت ویرایش شد");
           
           
            //redirect('/panel-admin/products')
        }
       
    })
    return {mutate,mutateAsync,isPending}
    
}

export const useGetCategories = ( itemOffset:number) => {
    
    const{isPending,data,isSuccess}=useQuery({
        queryKey: ["Categories", itemOffset],
        queryFn: () => getCategories( itemOffset),
        // staleTime: 2 * 60 * 60 * 1000,
        gcTime: 6 * 60 * 60 * 1000,
    });
    return {data,isPending,isSuccess}
};




