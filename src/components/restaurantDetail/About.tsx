import React from "react";
import { View, Text, Image } from "react-native";
import { singleBusiness } from "../../interfaces/interfaces";


const About = (props: singleBusiness) => {
    const {name, image_url, review_count, rating, categories, price} = props;

    const formattedCategories = categories?.map(category => category.title).join(' • ');

    const description = `${formattedCategories} ${price ? ' • ' + price : '' } • 🎫 • ${rating} ⭐ (${review_count}+)`;
    return (
        <View
        style={{
            borderBottomWidth: 1.2,
            borderBottomColor: 'gray',
            paddingBottom: 20,
        }}>
            <RestaurantImg image={image_url} />
            <RestaurantTitle name={name} />
            <RestaurantDescription description={description}/>
        </View>
    )
}

export default About

const RestaurantImg = (props: any) => (
    <Image source={{uri: props.image}} style={{width: '100%', height: 180}}/>
);

const RestaurantTitle = (props: any) => (
    <Text style={{fontSize: 29, fontWeight: '600', marginTop: 10, marginHorizontal: 15,}}>{props.name}</Text>
);

const RestaurantDescription = (props: any) => (
    <Text style={{marginTop: 10, marginHorizontal: 15, fontWeight: "400", fontSize: 15.5,}}>{props.description}</Text>
);
