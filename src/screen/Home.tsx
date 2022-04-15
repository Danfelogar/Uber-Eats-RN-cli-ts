import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import BottomTab from '../components/home/BottomTab';
import HeaderTabs from '../components/home/HeaderTabs';
import Categories from '../components/home/Categories';
import RestaurantItem from '../components/home/RestaurantItem';
import SearchBar from '../components/home/SearchBar';
//hooks
import { useHome } from '../hooks/useHome';


export default function Home() {

    const { restaurantData, city, setCity, activeTab, setActiveTab } = useHome();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#eee', }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity}/>
            </View>
            < ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} />
            </ScrollView>
            <BottomTab />
        </SafeAreaView>
    )
}