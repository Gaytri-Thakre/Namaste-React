import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import useRestaurants from '../utils/useRestaurants';
import ResCard from "./ResCard";
import Shimmer from './Shimmer';

const Body=()=>{
  // state variable useState()
  const listOfRestaurants = useRestaurants();
  const FilterRestaurants = useRestaurants();
  const [searchText,setsearchText]=useState("")
  
  function ClickHandler(){
    // filter logic here
    
    const topres = FilterRestaurants.filter(
      (res) => (res.info.avgRating)>4
    );
    setFilterRestaurants(topres);
    console.log(topres);
  }

  console.log("Body render");
  
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return(
      <div>Looks Like you are Offline</div>
    );
  }
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
                FilterRestaurants.map((restaurant) =><Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}><ResCard  resData ={restaurant}/></Link> )
              }
              
            </div>

        </div>
    )
}
export default Body;