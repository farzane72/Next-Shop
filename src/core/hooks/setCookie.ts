import Cookies from "js-cookie";


// interface cookieType {
//     refresh?:string,
//     access?:string
// }
const SetCookie=(cookieName:string,value:string)=>{
    Cookies.set(cookieName, value)

}

export default SetCookie