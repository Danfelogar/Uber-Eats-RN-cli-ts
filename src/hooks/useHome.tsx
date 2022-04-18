import { useEffect, useState } from "react";
import { Business, Transaction } from "../interfaces/interfaces";


export const useHome = () => {
    const YELP_API_KEY = "5MJwSBi-BMvPLbdmoYnnYuNEpG_FFIXc5CSKO8gpawy4JZiiIo-YTkCNk5qeZ5zVdg3ff-EGcXgSJBMn7jGAvAmffW523cNFgIIQl2T3NVizwZZ2QoFhIkNcQF5YYnYx";

    const [restaurantData, setRestaurantData] = useState([]);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState<string | Transaction[]>("Delivery");
    const getRestaurantsFromYelp = async() => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return await fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
        setRestaurantData(
            json.businesses.filter((business: Business) =>
                business.transactions.includes(activeTab.toLowerCase())
            )
        ))
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab])

    return{
        activeTab,
        restaurantData,
        city,
        setCity,

        setActiveTab,
    }
}