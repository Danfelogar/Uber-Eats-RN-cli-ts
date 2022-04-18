import { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { NavHome } from "../interfaces/interfaces";

export const useOrderCompleted = () => {

    const navigation = useNavigation<NavHome>();

    const { items, restaurantName } = useSelector((state: any) => state.cartReducer.selectedItems);

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home");
        }, 8000);
    }, [])

    return{
        items,
        restaurantName,
    }
}