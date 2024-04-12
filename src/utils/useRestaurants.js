import { useState,useEffect } from "react";
import { RES_API } from "./constants";
const useRestaurants = () => {
    const [listOfRestaurants,setlistOfRestaurants] = useState([]);
    const [FilterRestaurants,setFilterRestaurants] = useState([]);
  // useeffect:
  useEffect(()=>{fetchData()},[]);
  const fetchData= async()=>{
    const data= await fetch(RES_API);
    json= await data.json();
    console.log(json);
    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  return listOfRestaurants;
}

export default useRestaurants
