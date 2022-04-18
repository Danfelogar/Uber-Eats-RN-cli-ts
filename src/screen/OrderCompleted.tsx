import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import LottieView from "lottie-react-native";
import { StackScreenProps } from '@react-navigation/stack';

import MenuItem from '../components/restaurantDetail/MenuItem';
import { RootStackParam } from '../navigation/StackNavigation';
import { useOrderCompleted } from '../hooks/useOrderCompleted';
import OrderItem from '../components/restaurantDetail/OrderItem';
import { PropsFoods } from '../interfaces/interfaces';

interface Props extends StackScreenProps<RootStackParam, 'OrderCompleted'> {};

const OrderCompleted = ({route}: Props) => {

    const { totalUSD } = route.params;

    const { items ,restaurantName } = useOrderCompleted();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View
                style={{
                margin: 15,
                alignItems: "center",
                height: "100%",
                }}
            >
                <LottieView
                style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
                source={require("../assets/animations/check-mark.json")}
                autoPlay
                speed={0.5}
                loop={false}
                />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Your order at {restaurantName} has been placed for {totalUSD}
                </Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {items.map((food:PropsFoods, idx:number) => (
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
                    <LottieView
                        style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
                        source={require("../assets/animations/cooking.json")}
                        autoPlay
                        speed={0.5}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default OrderCompleted

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
    <View style={{width: 217, justifyContent: 'space-evenly' }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImg = (props:any) => (
    <View>
        <Image source={{uri: props.food.image}} style={{width: 100, height: 100, borderRadius: 8,}}/>
    </View>
)
