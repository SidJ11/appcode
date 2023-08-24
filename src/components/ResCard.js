import { IMG_CDN } from "../utils/constants";

const ResCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, locality} = resData?.card.card.info
    return(
        <div className="res-card">
            <div className="res-img-container"><img className="res-img" src={IMG_CDN+cloudinaryImageId} /></div>
            <div className="res-details">
                <div className="res-namerating"> <div className="res-name">{name}</div>
                <div className="res-rating">{avgRating}⭐</div></div>
                <div className="res-cuisines">{cuisines.join(", ")}</div>
                <div className="res-costfortwo">{costForTwo}</div>
                <div className="res-location">{locality}</div>
            </div>
        </div>
    )
}

export default ResCard;