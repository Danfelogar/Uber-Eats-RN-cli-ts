import React from 'react';
import { View, SafeAreaView } from 'react-native';

import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';

export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#eee', }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <Categories />
        </SafeAreaView>
    )
}