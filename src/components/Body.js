import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import ResCard from "./ResCard";
import resList from "../utils/mockData";

const Body=()=>{
  // state variable useState()
  const [listOfRestaurants,setlistOfRestaurants] = useState(resList);
 
  // normal js variable
  // const list=[{},{}]
  
  function ClickHandler(){
    // filter logic here
    
    const FilterRestaurants = listOfRestaurants.filter(
      (res) => (res.data.avgRating)>4
    );
    setlistOfRestaurants(FilterRestaurants);
    console.log(FilterRestaurants);
  }
  // useeffect:
  // useEffect(()=>{
  //   fetchData();
  // },[]);
  // const fetchData= async()=>{
  //   const data= await fetch(

  //   );
  //   json= await data.json();
  //   console.log(json);
  // };
  console.log("Body render");
    return(
        <div>
            <div className="filter">
              <button className="top-rated-btn" onClick={ClickHandler}>Top Rated Button</button>
            </div>
            <div className="Restaurant-Container">
              {
                listOfRestaurants.map((restaurant) => <ResCard key={restaurant.info.id} resData ={restaurant}/>)
              }
              
            </div>

        </div>
    )
}
export default Body;