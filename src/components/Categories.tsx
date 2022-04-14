import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const items = [
    {
        image: require('../assets/images/shopping-bag.png'),
        text: 'Pick-up',
    },
    {
        image: require('../assets/images/soft-drink.png'),
        text: 'Soft Drinks',
    },
    {
        image: require('../assets/images/bread.png'),
        text: 'Backery Items',
    },
    {
        image: require('../assets/images/fast-food.png'),
        text: 'Fast Foods',
    },
    {
        image: require('../assets/images/deals.png'),
        text: 'Deals',
    },
    {
        image: require('../assets/images/coffee.png'),
        text: 'Coffee & Tea',
    },
    {
        image: require('../assets/images/desserts.png'),
        text: 'Desserts',
    },
];

const Categories = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                items.map((item, idx) => (
                <View key={idx} style={{alignContent:'center', marginRight: 30, backgroundColor: 'red'}}>
                    <Image source={item.image}  style={{width: 60, height: 50, resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 13, fontWeight: '900', textAlign: 'center' }}>{item.text}</Text>
                </View>
            ))
            }
        </ScrollView>
    )
}

export default Categories

const styles = StyleSheet.create({})