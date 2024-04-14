import React, { useState } from 'react'
import ItemList from './ItemList';
const RestaurantCategory = ({data,showItems,setShowIndex}) => {
    const handleClick = ()=>{
        setShowIndex();
        showItems=!showItems;
    }
    return (
        <div className='w-100% mx-auto my-4 bg-gray-50 p-4 shadow-lg '>
        {/*Header */}
        <div className='w-[800px] flex justify-between cursor-pointer' onClick={handleClick}>
            <span className='font-bold text-lg'>{data.title } ({data.itemCards.length})</span>
            <span> ⬇️ </span>
        </div>
        {/* Accordion body */}
        {/* Item List */}
        {showItems &&< ItemList items={data.itemCards} />}
        </div>
    )
}

export default RestaurantCategory
