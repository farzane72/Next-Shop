import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query";
import { readData,deleteData,createData,updateData } from "@/services/http-service";
import { AddUserType,EditUserType } from "src/types/UsersType";
import {  redirect } from 'next/navigation';
import toast from "react-hot-toast";



const getUsers = (currentPage:number): Promise<any> => {
    const url = `/auth/users/?offset=${currentPage}&limit=10`;
    return readData(url);
};

const getUserDetail = (id:number): Promise<any> => {
    const url = `/auth/users/${id}`;
    return readData(url);
};

const deleteUser =(id:number):any=>{
    const url = `/auth/users/${id}/`;
    return deleteData(url);

}

const addUser =(data:AddUserType): Promise<any>=>{
    const url = `/auth/users/`;
    return createData(url,data);

}

const editUser =(data:EditUserType): Promise<any>=>{
    const url = `/auth/users/${data.id}/`;
    return updateData(url,{email:data.email});

}

export const useGetUsers = (currentPage:number) => {
    return useQuery({
        queryKey: ["users",currentPage],
        queryFn: () => getUsers((currentPage - 1) * 10),
        // staleTime: 2 * 60 * 60 * 1000,
        gcTime: 6 * 60 * 60 * 1000,
    });
};


export const useUserDetail = (id:number) => {
  const{isPending,data,isSuccess}=useQuery({
    queryKey:['User',id],
    queryFn:()=>getUserDetail(id)
  })

  return {data,isPending,isSuccess}
};



export const useDeleteUser=() =>{
    const client=useQueryClient()
    const {mutate ,mutateAsync}=useMutation({
        mutationKey:['DeleteUser'],
        mutationFn:(id:number)=>deleteUser(id),
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
            client.setQueryData(['users'],context)
        },
        onSuccess:()=>{
            client.invalidateQueries({queryKey:['users']})
            
           

        }
       
    })
    return {mutate,mutateAsync}
    
}

export const useAddUser=() =>{
    const client=useQueryClient()
    const {mutate ,mutateAsync,isPending}=useMutation({
        mutationKey:['AddUser'],
        mutationFn:(data:AddUserType)=>addUser(data),
        
        onError:(e:AddUserType,y,context)=>{
            client.setQueryData(['users'],context)
            //toast.error("وجود خطا در ثبت کاربر جدید");
           // console.log(e.email);
           if(e.email)
            {
                toast.error(`${e.email}`);
            }
                
            if(e.phone)
                {toast.error(`${e.phone}`);}

        
        },
        onSuccess:()=>{
            client.invalidateQueries({queryKey:['AddUser']})
            toast.success("کاربر جدید با موفقیت اضافه شد");
           

        }
       
    })
    return {mutate,mutateAsync,isPending}
    
}

export const useEditUser=() =>{
    const client=useQueryClient()
    const {mutate ,mutateAsync,isPending}=useMutation({
        mutationKey:['EditUser'],
        mutationFn:(data:EditUserType)=>editUser(data),
        
        onError:(e:AddUserType,y,context)=>{
            client.setQueryData(['users'],context)
          //  toast.error("وجود خطا در ویرایش کاربر ");
           console.log(e);
           if(e.email)
            {
                toast.error(`${e.email}`);
            }
                
            if(e.phone)
                {toast.error(`${e.phone}`);
        }


           
     
        
        },
        onSuccess:()=>{
            client.invalidateQueries({queryKey:['EditUser']})
           // toast.success("کاربر با موفقیت ویرایش شد");
           
           
           // redirect('/panel-admin/users')
        }
       
    })
    return {mutate,mutateAsync,isPending}
    
}


