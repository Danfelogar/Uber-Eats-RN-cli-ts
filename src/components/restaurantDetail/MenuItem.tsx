import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

import { PropsFoods } from '../../interfaces/interfaces';

interface props {
    foods: PropsFoods[];
}

const MenuItem = (foods: props) => {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.foods.map((food:any, idx:number) => (
                <View
                key={idx}
                style={{
                    borderBottomWidth: 0.2,
                    borderBottomColor: 'gray',
                    }}>
                    <View style={styles.MenuItemStyle}>
                        <FoodInfo food={food}/>
                        <FoodImg food={food}/>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}

export default MenuItem

const styles = StyleSheet.create({
    MenuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600',
    },
});

const FoodInfo = (props:any) => (
    <View style={{width: 240, justifyContent: 'space-evenly' }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImg = (props:any) => (
    <View>
        <Image source={{uri: props.food.image}} style={{width: 100, height: 100, borderRadius: 8}}/>
    </View>
)