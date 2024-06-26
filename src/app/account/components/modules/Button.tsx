import { ThreeDots } from "react-loader-spinner";

import { useAppSelector } from "@/redux/store";
interface BuutonProps {
    text:string,
    disabledItem:any
    
}
 
const Button: React.FunctionComponent<BuutonProps> = ({text,disabledItem}) => {
    const {  loading } = useAppSelector((store) => store.login);
    return (  
        <>
         {loading ? (
                <div className="flex justify-center">
                  <ThreeDots
                    visible={true}
                    height="50"
                    width="50"
                    color=" rgb(59 130 246)"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={disabledItem}
                  className="border-blue-800 bg-blue-500 p-2 rounded-md text-white mt-16"
                >
                 {text}
                </button>
              )}
        </>

    );
}
 
export default Button;