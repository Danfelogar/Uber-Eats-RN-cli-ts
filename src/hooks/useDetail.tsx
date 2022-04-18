import React from 'react';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PropsFoods } from "../interfaces/interfaces";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import OrderItem from '../components/restaurantDetail/OrderItem';


export const useDetail =()=>{

    const dispatch = useDispatch();

    const [modalShow, setModalShow] = useState(false);

    const [loading, setLoading] = useState(false);

    const { items, restaurantName } = useSelector( (state: any) => state.cartReducer.selectedItems);

    const total = items.map((item:PropsFoods) => Number(item.price.replace('$', ''))).reduce((prev: number, curr: number)=> prev + curr, 0);

    const totalUSD = total.toLocaleString('en', { style: 'currency', currency: 'USD' });

    const selectItem = ( item:PropsFoods, name: string | undefined, checkBoxValue: Boolean ) => {
        dispatch({
            type: 'addToCartaddToCart',
            payload: {
                ...item,
                restaurantName: name,
                checkBoxValue: checkBoxValue,
            }
        })
    };

    const addOrderToFireBase = () => {
        setLoading(true);

            setTimeout(() => {
                setLoading(false);
                // navigation.navigate("OrderCompleted");
            }, 2500);

    };

    const isFoodInCart = ( food: PropsFoods) => Boolean(items.find((item: PropsFoods) => item.title === food.title));

    const checKoutModalContent = () =>{
        return(
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {
                            items.map((item: PropsFoods, idx:number) => (
                                <View key={idx}>
                                    <OrderItem price={item.price} title={item.title} />
                                </View>
                            ))
                        }
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>{totalUSD}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                            <TouchableOpacity
                            style={{
                                marginTop: 20,
                                backgroundColor: "black",
                                alignItems: "center",
                                padding: 13,
                                borderRadius: 30,
                                width: 300,
                                position: "relative",
                            }}
                            onPress={() => addOrderToFireBase()}
                            >
                                <Text style={{ color: 'white', fontSize: 20 }}>Checkout</Text>
                                <Text
                                style={{
                                    position: "absolute",
                                    right: 20,
                                    color: "white",
                                    fontSize: 15,
                                    top: 17,
                                }}
                                >{total ? totalUSD : ''}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    };

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.7)",
        },
        modalCheckoutContainer: {
            backgroundColor: "white",
            padding: 16,
            height: 500,
            borderWidth: 1,
        },
        restaurantName: {
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
            marginBottom: 10,
        },
        subtotalContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
        },
        subtotalText: {
            textAlign: "left",
            fontWeight: "600",
            fontSize: 15,
            marginBottom: 10,
        },
    });

    return{
        items,
        restaurantName,
        modalShow,

        setModalShow,
        totalUSD,
        selectItem,
        isFoodInCart,
        checKoutModalContent,
    }
}