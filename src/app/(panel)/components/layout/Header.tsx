import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";

interface HeaderProps {
    
}
 
const Header: React.FunctionComponent<HeaderProps> = () => {
    return ( 
        <div className="bg-[#1d3855] px-8 py-4 flex justify-between">

           <div className="">
            <Image src="/images/logo.svg" width={100} height={80} alt="logo" />
           </div>
           <div className="">
            <div className="flex gap-4">
                <HiOutlineMail className="text-2xl text-white" />
                <FaRegQuestionCircle className="text-2xl text-white" />
                <FaRegBell className="text-2xl text-white" />

            </div>

           </div>
        </div>
     )
}
 
export default Header;