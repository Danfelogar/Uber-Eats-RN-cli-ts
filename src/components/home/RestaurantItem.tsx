import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { arrayLocalRestaurants, Business, NavDeatail, PropsRestItemImg, PropsRestItemInfo } from '../../interfaces/interfaces';

interface props {
    //it is array
    restaurantData:  Business[] ,
}

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:
        "https://cache.marriott.com/marriottassets/marriott/MEXMC/mexmc-mansion-0053-hor-feat.jpg?downsize=1024px:*",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];


const RestaurantItem = ({ restaurantData}:props) => {
    const navigation = useNavigation<NavDeatail>();
    return (
        <>
            {
                restaurantData.map((restauran, idx) => (
                    <TouchableOpacity key={idx} activeOpacity={0.9} style={{marginBottom: 30,}} onPress={() => navigation.navigate('RestaurantDeatails',{name: restauran.name, image_url: restauran.image_url, review_count: restauran.review_count, rating: restauran.rating, categories: restauran.categories, price: restauran.price}) }>
                        <View style={{ marginTop: 10, padding: 15, backgroundColor: 'white', }}>
                            <RestaurantImage image={restauran.image_url}/>
                            <RestaurantInfo name={restauran.name} rating={restauran.rating}/>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </>
    )
}

export default RestaurantItem

const RestaurantImage = ({image}: PropsRestItemImg) => (
    <>
        <Image
            source={{uri: image}}
            style={{ width: '100%', height: 180 }}
        />
        <TouchableOpacity style={{position: 'absolute', right: 20, top: 30}}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = ({name, rating}: PropsRestItemInfo) => (
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop: 10, }}>
        <View>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{name}</Text>
            <Text style={{fontSize: 13, color: 'gray'}}>30-45 min</Text>
        </View>
        <View style={{backgroundColor: '#eee', height: 30, width: 30, alignItems: 'center', justifyContent:'center', borderRadius: 15,}}>
            <Text>{rating}</Text>
        </View>
    </View>
)