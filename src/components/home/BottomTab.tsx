import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface props {
    icon: string,
    text: string,
}

const BottomTab = () => {
    return (
        <View
        style={{
            borderTopWidth: 1.5,
            borderTopColor: 'gray',
        }}
        >
            <View
            style={{
                flexDirection: "row",
                margin: 10,
                marginHorizontal: 30,
                justifyContent: "space-between",
            }}
            >
                <Icon icon="home" text="Home" />
                <Icon icon="search" text="Browse" />
                <Icon2 icon="shoppingcart" text="Grocery" />
                <Icon icon="receipt" text="Orders" />
                <Icon2 icon="user" text="Account" />
            </View>
        </View>
    );
}

export default BottomTab


const Icon = (props: props) => (
    <TouchableOpacity>
        <View>
            <Ionicons
                name={props.icon}
                size={25}
                style={{
                    marginBottom: 3,
                    alignSelf: "center",
                }}
            />
            <Text>{[props.text]}</Text>
        </View>
    </TouchableOpacity>
);

const Icon2 = (props: props) => (
    <TouchableOpacity>
        <View>
            <AntDesign
                name={props.icon}
                size={25}
                style={{
                    marginBottom: 3,
                    alignSelf: "center",
                }}
            />
            <Text>{[props.text]}</Text>
        </View>
    </TouchableOpacity>
);