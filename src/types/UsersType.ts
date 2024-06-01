export interface userType{
    phone:string,
    email:string,
    id:number,
    role:string,
    has_password:Boolean

   
    
 }

 export interface usersType{
    count_items_current_page:number,
   
    count_pages:number,
    
    next:string,
   
    previous:string,
   
    results:userType[],
    
    total_items:number

 }


 export interface AddUserType{
   phone:string,
   email:string,
  // id: number,


}
// export interface EditUserType{
//    phone:string,
//    email:string,
//    id: number,


// }
export interface EditUserType{
   phone:string,
   email:string,
   id:number


}
export interface PanelType{
   users: usersType,
   loading:boolean,
   error:any,
   currentPage:number,
  addOrEdit:string,
  user:userType


}
 