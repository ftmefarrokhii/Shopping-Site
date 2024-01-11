import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const  ThemeContext  =  createContext();

export default function ThemeProvider({children}){
    const [isDarkMode,setIsDarkMode] =  useLocalStorage(
        "isDarkMode" , false
        // window.matchMedia("(prefers-color-scheme : dark)").matches
    )
    
    const ToggleDarkMode = ()=>{
        setIsDarkMode((prev) => !prev)
    }
    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add("dark-mode")
            document.documentElement.classList.remove("light-mode")

        }else{
            document.documentElement.classList.add("light-mode")
            document.documentElement.classList.remove("dark-mode")
        }
    },[isDarkMode])
    return  (
        <ThemeContext.Provider value={{ isDarkMode, ToggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );

}
export function useDarkMode(){
    const context = useContext(ThemeContext)
    if(context === undefined) throw new Error("DarkMode context was used outside of darkmodeProvider")
    return context
}
