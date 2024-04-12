// input and output 
import { useEffect, useState } from 'react';
import {MENU_API} from './constants';
const useRestaurantMenu = (resID) => {
    // fetch data:
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchRes();
    },[resID]);
    
    const fetchRes=async()=>{
        const data=await fetch(MENU_API+resID);
        json=await data.json();
        // console.log(json);
        setResInfo(json.data); 
        console.log(resInfo);
        
    };
    return resInfo;
    
}

export default useRestaurantMenu;
