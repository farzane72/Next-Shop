import React from "react"

interface TextErrorType{
    children: React.ReactNode;

}
function TextError({children}:TextErrorType) {
    return (
        <div className=" text-sm text-red-500">
            {children}
        </div>
    )
}

export default  TextError
