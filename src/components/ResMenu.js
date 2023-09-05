import { useEffect, useState } from "react"

const ResMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(()=> {
        fetchMenu();
    },[]);

  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=45607&catalog_qa=undefined&submitAction=ENTER")
    const json = await data.json();
    console.log(json)
    setResInfo(json)
    console.log(resInfo)
  }
  const {name, cuisines} = resInfo?.data?.cards[0]?.card?.card?.info;

  return (
    <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
    </div>
  )
}

export default ResMenu