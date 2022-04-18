import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";

import About from "../components/restaurantDetail/About";
import MenuItem from "../components/restaurantDetail/MenuItem";
import ViewCartBtn from "../components/restaurantDetail/ViewCartBtn";
import { Business } from "../interfaces/interfaces";
import { RootStackParam } from "../navigation/StackNavigation";

interface Props extends StackScreenProps<RootStackParam, 'RestaurantDeatails'> {};

const RestaurantDeatails = ({route}: Props) => {

    const { name, image_url, review_count, rating, categories, price } = route.params;

    return (
        <View style={{ flex: 1}}>
            <About name={name}  image_url={image_url} review_count={review_count} rating=
            {rating} categories={categories} price={price}/>
            <MenuItem name={name}/>
            <ViewCartBtn name={name}/>
        </View>
    );
}

export default RestaurantDeatails
