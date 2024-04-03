export interface user{
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
   
    results:user[],
    
    total_items:number

 }

export interface PanelType{
    users: usersType,
    loading:boolean,
    error:any,
    currentPage:number,
    usersLength:number


 }

 