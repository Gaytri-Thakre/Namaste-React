import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {MENU_API} from '../utils/constants';
import Shimmer from './Shimmer';
const Restaurant = () => {
    const [ResData,SetResData]=useState([]);
    const [DishList,SetDishList] = useState([]);
    useEffect(()=>{
        fetchRes();
    },[]);
    const {resID}=useParams();
    console.log(resID);
    
    const fetchRes=async()=>{
        const data=await fetch(MENU_API+resID);
        json=await data.json();
        // console.log(json);
        SetResData(json?.data?.cards[2]?.card?.card?.info);
        SetDishList(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);            
        // console.log(ResData);
        console.log(DishList)
    };
    const {name,city,cuisines,costForTwoMessage} = ResData;
    // const {name,defaultPrice,description} = DishList;
    if(ResData===null){
        <Shimmer/>
    }
  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h4>{city}</h4>
      <h4>{cuisines}</h4>
      <h4>{costForTwoMessage}</h4>
      <h4>{cuisines}</h4>
      <ul>
          {DishList.map(Dish => <li key={Dish.card.info.key}>{Dish.card.info.name }- {"Rs"} {Dish.card.info.price/100 || Dish.card.info.defaultPrice/100 }</li>)}
      </ul>
    </div>
  )
}

export default Restaurant
