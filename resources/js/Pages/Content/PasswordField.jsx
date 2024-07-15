import { useState } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
export default function PasswordField(){
    const [showPassword, setShowPassword] = useState(false)

    const visibilityPassword = ()=>{
        setShowPassword(!showPassword)
    }
    return(
        <div className="flex justify-center items-center h-screen">
            <label htmlFor="password">Password</label>
            <input type={showPassword ? "password" : "text"} className="ml-3 mr-1"/>
            <button onClick={visibilityPassword}>
                {
                    showPassword ? (<MdVisibilityOff/>) : (<MdVisibility/>)
                }

            </button>
        </div>
    )
}
