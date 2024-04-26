import { ThreeDots } from "react-loader-spinner";

import { useAppSelector } from "@/redux/store";
interface BuutonProps {
    text:string,
    disabledItem:any
    loading:Boolean
}
 
const Button: React.FunctionComponent<BuutonProps> = ({text,disabledItem,loading}) => {
    //const {  loading } = useAppSelector((store) => store.panel);
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
                  className="border-blue-800 bg-blue-500 p-2 rounded-md text-white mt-8 w-full cursor-pointer"
                >
                 {text}
                </button>
              )}
        </>

    );
}
 
export default Button;