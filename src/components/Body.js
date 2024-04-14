import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import ResCard,{withisOpen} from "./ResCard";
import Shimmer from './Shimmer';
import {RES_API} from '../utils/constants';
import Dish from './Dish';

const Body=()=>{
  // state variable useState()
  const [listOfRestaurants,setlistOfRestaurants] = useState([]);
  const [FilterRestaurants,setFilterRestaurants] = useState([]);
  const [searchText,setsearchText]=useState("");
  const [dishes , setDishes] = useState([]);
  const RestaurantCardOnline = withisOpen(ResCard);
  // useeffect:
  useEffect(()=>{
    fetchData()
  },[]);
  const fetchData= async()=>{
    const data= await fetch(RES_API);
    json= await data.json();
    console.log(json);
    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setDishes(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };
  function ClickHandler(){
    // filter logic here
    
    const topres = FilterRestaurants.filter(
      (res) => (res.info.avgRating)>4
    );
    setFilterRestaurants(topres);
    console.log(topres);
  }
  console.log(listOfRestaurants);
  console.log("Body render");
  
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return(
      <div>Looks Like you are Offline</div>
    );
  }
// Conditional rendering:
return listOfRestaurants.length===0?<Shimmer/>:(
  <div>
  <div className="relative w-11/12 max-w-[1200px] mx-auto pt-4">
      
      <div className="filter">
        <div className="relative w-[1080px] mx-auto flex items-center justify-around space-x-4">
            <input type="text" className="search-box w-90 h-12 px-4 text-lg rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={searchText} 
            onChange={
              (e)=>{
                setsearchText(e.target.value)
              }
            }></input>
            <button onClick={()=>{
              // Filter by category
              // update the UI
              console.log(searchText)
              const filterRes = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilterRestaurants(filterRes);
            }} className="px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">search</button>
        </div>
        {/* <button className="top-rated-btn" onClick={ClickHandler}>Top Rated Button</button> */}
      </div>
      <h4>What's on your mind?</h4>
      <div className="flex whitespace-nowrap overflow-x-auto mt-3 gap-30 scroll-snap-type-x ">
        
        {
          dishes.map((dish)=> <Dish dishData={dish}></Dish>)
        }
      </div>
      
     
      <div className="w-[1200px] grid grid-cols-4 gap-3 mx-auto mt-9">
        
          {
            FilterRestaurants.map((restaurant) =>
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
              {
                restaurant.info.isOpen ?(
                  <RestaurantCardOnline resData ={restaurant}/>
                ):<ResCard  resData ={restaurant}/>
              }
            </Link> )
              
          }
          
        
      </div>
      

  </div>
  </div>
)
}
export default Body;