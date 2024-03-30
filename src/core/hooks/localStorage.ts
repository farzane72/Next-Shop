


export const SetLoacalStorage = (name:string,value:string)=>{
    localStorage.setItem(name,value)
 }

 export const GetLoacalStorage = (name:string)=>{
  const test=localStorage.getItem(name)
   return test
   
 }

 export const RemoveLoacalStorage = (name:string)=>{
     localStorage.remove(name);
  }