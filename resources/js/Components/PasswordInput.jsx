import { useState } from "react"
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

export default function PasswordInput(){
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = ()=>{
        console.log("visibility button")
        setShowPassword(!showPassword)
    }
    return(
        <div>
            <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password jadi-jadian"
            />
            <button type="button" onClick={togglePasswordVisibility}>
                {
                (showPassword) ? (<MdOutlineVisibility className="dark: text-gray-400" />) : (<MdOutlineVisibilityOff className=" dark:text-gray-400"/>)
            }
            </button>

        </div>
    )
}
