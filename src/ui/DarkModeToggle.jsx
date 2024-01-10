import {HiOutlineMoon, HiOutlineSun} from 'react-icons/hi'
import { useDarkMode } from "../context/ThemeProvider"

export default function DarkModeToggle(){
    const { isDarkMode, ToggleDarkMode } = useDarkMode()
    return(
            <button onClick={ToggleDarkMode}>
                {isDarkMode ? (
                <HiOutlineSun className='w-5 h-5 text-primary-900'/>
                ) : (
                    <HiOutlineMoon className='w-5 h-5 text-primary-900'/>
                )}
            </button>
    )
}