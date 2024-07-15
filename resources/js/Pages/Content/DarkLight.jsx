import { useState, useEffect } from "react";
import { MdSunny, MdDarkMode } from "react-icons/md";

export default function DarkLight(){
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const [isSelected, setIsSelected] = useState(false)

    const toggleTheme = () => {
        setIsSelected(!isSelected)
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        // <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className={`flex justify-center items-center h-screen transition-colors duration-700 dark:bg-gradient-to-tl from-green-900 to-gray-900 dark:text-white`}>
            <div onClick={()=>toggleTheme()} className="flex w-20 h-10 bg-gray-600 rounded-full m-10">
                <span className={`flex justify-center items-center h-10 w-10 bg-white rounded-full transition-all duration-700 ${!isSelected ? "bg-green-700 ml-10":""}`}>
                    {
                        isSelected ? (<MdSunny className="w-6 h-6"/>) : (<MdDarkMode className="w-6 h-6"/>)
                    }
                </span>
            </div>
        </div>
    );
}
