import React from 'react'

const Dish = ({dishData}) => {

  
  const{imageId} = dishData;
  
  return (
    <div className="transition-transform duration-300 ease-in-out flex bg-transparent justify-between gap-10 scroll-snap-align-center w-auto animate-scroll-images">
        <img className="h-200 w-160 cursor-pointer" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+imageId}></img>  
    </div>
  )
}

export default Dish
