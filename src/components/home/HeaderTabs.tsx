import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

import { PropsCompHBtn } from '../../interfaces/interfaces';

export default function HeaderTabs(props :any) {
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <HeaderButton
            text='Delivery'
            btnColor='black'
            textColor='white'
            activeTab={props.activeTab}
            setActiveTab={props.setActiveTab}
            />
            <HeaderButton
            text='Pickup'
            btnColor='white'
            textColor='black'
            activeTab={props.activeTab}
            setActiveTab={props.setActiveTab}
            />
        </View>
    )
}

const HeaderButton = ( { text, btnColor, textColor, activeTab, setActiveTab }: PropsCompHBtn ) => (
    <TouchableOpacity
        style={{
            backgroundColor: activeTab === text ? 'black' : 'white',
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
        onPress={() => setActiveTab(text)}
    >
        <Text style={{
            color: activeTab === text ? 'white' : 'black',
            fontSize: 15,
            fontWeight: '900'
            }}
        >
            {text}
        </Text>
    </TouchableOpacity>
)