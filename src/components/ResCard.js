import {LOGO_URL} from "../utils/constants";
const ResCard=(props)=>{
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating,cuisines,deliveryTime} = resData?.info;
  
      return(
          <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
              <img className="res-logo" src={LOGO_URL+cloudinaryImageId}></img>
              <h3 className="res-name">{name}</h3>
            
              <p>{cuisines.join(',')}</p>
              <div className="res-card-des">
                  <p>{avgRating} stars</p>
                  <p>{deliveryTime} minutes</p>
              </div>
              
          </div>
      )
  }
  export default ResCard;