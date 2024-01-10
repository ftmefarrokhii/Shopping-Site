import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {NavLink, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { IoHome ,IoGameControllerOutline} from "react-icons/io5";
import { FaMobileAlt ,FaTabletAlt ,FaLaptop ,FaHeadphones } from "react-icons/fa";
import { FiWatch } from "react-icons/fi";
import { MdSpeaker } from "react-icons/md";


export default function TabHeader(){
  const location = useLocation()
  console.log(location.pathname);
    const [value, setValue] = useState(0);
    useEffect(() => {
      const index = 
        location.pathname === '/' ? 0 :
        location.pathname === '/categories/phones' ? 1 :
        location.pathname === '/categories/tablets' ? 2 :
        location.pathname === '/categories/laptops' ? 3 :
        location.pathname === '/categories/digitalWatches' ? 4 :
        location.pathname === '/categories/headphones' ? 5 :
        location.pathname === '/categories/speakers' ? 6 :
        location.pathname === '/categories/consoles' ? 7 :
        0; 
      setValue(index)
    }, [location.pathname]);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  const tabOptions = [
    { path : "/" , label : "خانه" , icon : <IoHome />},
    { path : "/categories/phones" , label : "موبایل" , icon : <FaMobileAlt /> },
    { path : "/categories/tablets" , label : "تبلت" , icon : <FaTabletAlt />},
    { path : "/categories/laptops" , label : "لپ تاپ", icon : <FaLaptop  />},
    { path : "/categories/digitalWatches" , label : "ساعت هوشمند", icon : <FiWatch  />},
    { path : "/categories/headphones" , label : "هدفون و هندزفری", icon : <FaHeadphones  />},
    { path : "/categories/speakers" , label : "اسپیکر و بلندگو", icon : <MdSpeaker  />},
    { path : "/categories/consoles" , label : "گیمینگ", icon : <IoGameControllerOutline  />}
]

  return (
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        textColor="gray"
        TabIndicatorProps={{
          style: {
            backgroundColor: "gray"
          }
        }}
      >
        {tabOptions.map((option, index)=>(
          <Tab label={option.label} icon={option.icon} index={index} component={NavLink} to={option.path} 
          style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center',gap:"0.5rem"}}
          />
        ))}
      </Tabs>
  );
}