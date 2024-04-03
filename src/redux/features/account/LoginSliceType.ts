 export interface LoginType{
    phone:string,
    password?:string,
    request_id?:string
    error?:string,
    loading?:Boolean
    username?:string,
    currentUrl?:string
}
export interface SetPassType{
  
  password:string,
  username?:string
  
}
 export interface LoginWithPassType{
  
  password:string,
  username:string
  
}