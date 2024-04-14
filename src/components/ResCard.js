import {LOGO_URL} from "../utils/constants";
const ResCard=(props)=>{
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating,cuisines,deliveryTime} = resData?.info;
  
    return(
        <div className="m-4 p-4 w-[250px] overflow-hidden rounded-lg bg-gray-100 hover:scale-105 transition-all duration-200 shadow-md">
            <img className="rounded-lg" src={LOGO_URL+cloudinaryImageId}></img>
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
        
            <p>{cuisines.join(',')}</p>
            <div className="text-sm text-gray-600">
                <p>{avgRating} stars</p>
                <p>{deliveryTime} minutes</p>
            </div>
            
        </div>
    );
      
  };
//   Hire order component:
// input - RestaurantCard => RestaurantCardOnline
export const withisOpen = (ResCard)=>{
    return(props)=>{
        return(
            <div>
               <label className="absolute bg-black text-white">Open</label> 
               <ResCard {...props}/>
            </div>
        )
    }
}
  export default ResCard;