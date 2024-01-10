import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import { NavLink } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

export default function Manu() {
    const [open, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        setState(open);
    };
    const MenuOptions = [
        { path : "/" , label : "خانه"},
        { path : "/categories/phones" , label : "موبایل"},
        { path : "/categories/tablets" , label : "تبلت"},
        { path : "/categories/laptops" , label : "لپ تاپ"},
        { path : "/categories/digitalWatches" , label : "ساعت هوشمند"},
        { path : "/categories/speakers" , label : "اسپیکر و بلندگو"},
        { path : "/categories/consoles" , label : "گیمینگ"},
        { path : "/categories/headphones" , label : "هدفون و هندزفری"}
    ]
    const navlinkClass = "flex justify-between rounded-md p-2 text-black transition-all duration-300"


    return (
        <div className="p-2 rounded-lg lg:hidden focus:ring-2 focus:ring-gray-200 hover:bg-gray-100">

            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="open drawer" 
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
    
                <Box sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "#dbc8ff",
                  width:"auto"
                }}>

                <IconButton sx={{mb: 2}}>
                    <CloseIcon onClick={toggleDrawer(false)} />
                </IconButton>

                <Divider sx={{mb: 2}} />

                <ul className="flex flex-col w-60">
                    {MenuOptions.map((option)=>(
                        <li onClick={toggleDrawer(false)} key={option.path}>
                            <NavLink to={option.path}  
                                // className={`flex justify-between rounded-md p-2 text-black ${}`}
                                className={({isActive}) =>
                                    isActive 
                                        ? `${navlinkClass} text-purple-800 font-bold` 
                                        : `${navlinkClass} ` 
                                    }
                                >                            
                                <span>{option.label}</span>
                                <MdKeyboardBackspace />
                            </NavLink>
                        </li>  
                        
                    ))}
                </ul>
                </Box>            
            </Drawer>
        </div>
    );
}