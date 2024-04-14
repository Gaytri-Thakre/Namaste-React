import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice';


const ItemList = ({items}) => {
    
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        // dispatch an action
        dispatch(addItem(item));
    }
    
  return (
    <div>
        {items.map((item)=>(
            <div className="w-[800px] flex gap-2 justify-between p-2 border-b-2">
                <div className='w-9/12'>
                    <div key={item.card.info.id} >
                        <p>{item.card.info.name}</p>
                        <p> ₹ { item.card.info.defaultPrice/100||item.card.info.finalPrice/100 || item.card.info.price/100} </p>
                    </div>
                    <p className='text-xs'>
                        {item.card.info.description}
                    </p>
                </div>
                <div className='w-3/12 relative '>
                    <button className='p-2 text-white bg-black shadow-lg absolute   rounded-lg' onClick={()=>handleAddItem(item)}>Add+</button>
                    <img className='w-6/12 rounded-md' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId}></img> 
                </div>
                
                
            </div>
        ))};
    </div>
  )
}

export default ItemList
