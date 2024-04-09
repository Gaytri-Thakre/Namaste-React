import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import ResCard from "./ResCard";
import Shimmer from './Shimmer';

const Body=()=>{
  // state variable useState()
  const [listOfRestaurants,setlistOfRestaurants] = useState([]);
  const [FilterRestaurants,setFilterRestaurants] =useState([]);
  const [searchText,setsearchText]=useState("")
  // normal js variable
  // const list=[{},{}]
  
  function ClickHandler(){
    // filter logic here
    
    const topres = FilterRestaurants.filter(
      (res) => (res.info.avgRating)>4
    );
    setFilterRestaurants(topres);
    console.log(topres);
  }
  // useeffect:
  useEffect(()=>{

    fetchData();
  },[]);
  const fetchData= async()=>{
    const data= await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    json= await data.json();
    console.log(json);
    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  console.log("Body render");
  // Conditional rendering:
  
    return listOfRestaurants.length==0?<Shimmer/>:(
        <div>
            
            <div className="filter">
              <div className='search'>
                  <input type="text" className='search-box' value={searchText} 
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
                  }}>search</button>
              </div>
              <button className="top-rated-btn" onClick={ClickHandler}>Top Rated Button</button>
            </div>
            <div className="Restaurant-Container">
              {
                FilterRestaurants.map((restaurant) => <ResCard key={restaurant.info.id} resData ={restaurant}/>)
              }
              
            </div>

        </div>
    )
}
export default Body;