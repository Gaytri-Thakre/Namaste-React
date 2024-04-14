import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import Shimmer from './Shimmer';
const RestaurantMenu = () => {
  
  const {resID}=useParams();
  const resInfo = useRestaurantMenu(resID);
  const [showindex,setShowIndex] = useState(null);
  if(resInfo===null){return <Shimmer/>} 
  
  
  
  // const {name,defaultPrice,description} = DishList;
  const {name,avgRating,city,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info
  const DishList =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  const categories =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    c=>c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  
  return (
    <div className='mx-auto max-w-[1200px] flex flex-col  justify-around items-center'>
      
      <div className='flex flex-col'>
        <h1 className='font-bold text-xl'>{name}</h1>
        <div className='flex gap-3'>
          <h4>{avgRating}</h4>
          <h4>{costForTwoMessage}</h4>
        </div>
        <p className='text-bold text-lg'>{cuisines.join(", ")}</p>
      </div>
      {/* categories */}
      {categories.map((category,index)=>
      // controlled componenet
        <RestaurantCategory key={category?.card?.card?.name} data={category?.card?.card} showItems={index === showindex ? true : false}
        setShowIndex={()=>setShowIndex(index)}
        />)
      }
      
    </div>
  )
}

export default RestaurantMenu
