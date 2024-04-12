import React from 'react'
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';
const RestaurantMenu = () => {
  const {resID}=useParams();
  const resInfo = useRestaurantMenu(resID);
  if(resInfo===null){return <Shimmer/>}  
  console.log(resInfo);
  // const {name,defaultPrice,description} = DishList;
  const {name,city,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info
  const DishList =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
  return (
    
    <div className='menu'>
      <h1>{name}</h1>
      <h4>{city}</h4>
      <h4>{cuisines}</h4>
      <h4>{costForTwoMessage}</h4>
      <h4>{cuisines}</h4>
      <ul>
          {DishList.map(Dish => <li key={Dish.card.info.key}>
            {Dish.card.info.name }- {"Rs"} {Dish.card.info.price/100 || Dish.card.info.defaultPrice/100 }
          </li>)}
      </ul>
    </div>
  )
}

export default RestaurantMenu
