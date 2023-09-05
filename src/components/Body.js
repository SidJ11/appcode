import { useState, useEffect } from "react";
import resList from "../utils/resList";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listRes, setListRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&collection=80472&isNewCollectionFlow=true&tags=layout_BAU_Contextual%2Cpancake&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    json.data.cards.splice(0, 3);
    setListRes(json?.data?.cards);
    setFilteredRes(json?.data?.cards);
    console.log(listRes);
  };

  return listRes.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          placeholder="Search restaurants.."
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
        <button className="search-btn" onClick={() => {
            console.log(searchVal);
            const searchList = listRes.filter((res)=>res.card.card.info.name.toLowerCase().includes(searchVal.toLowerCase()))
            setFilteredRes(searchList)
            }}>
          Search
        </button>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listRes.filter(
                (x) => x.card.card.info.avgRating > 4.3
              );
              setListRes(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRes.map((restaurant) => (
          <ResCard key={restaurant.card.card.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
