// props de headerTabs btns

import { Dispatch, SetStateAction } from "react";

export interface NavDeatail {
    navigate: (value: string, restauran: singleBusiness) => void;
};

export interface PropsCompHBtn {
    text: string;
    btnColor?: string;
    textColor?: string;
    activeTab: string;
    setActiveTab: Dispatch<SetStateAction<string>>;
}

export interface arrayLocalRestaurants {
    name: string;
    image_url: string;
    categories: string[];
    price: string;
    reviews: number;
    rating: number;
}[]

export interface PropsRestItemImg {
    image: string;
}

export interface PropsRestItemInfo {
    name: string;
    rating: number;
}

export interface PropsFoods {
    title: string;
    description: string;
    price: string;
    image: string;
}[]


//Call api restaurant init
export interface PropsApiRestau {
    businesses: Business[];
    total:      number;
    region:     Region;
}

export interface singleBusiness {
    name?: string;
    image_url?: string;
    price?: Price;
    review_count?: number;
    rating?: number;
    categories?: Category[] | undefined;
}
export interface Business {
    id:            string;
    alias:         string;
    name:          string;
    image_url:     string;
    is_closed:     boolean;
    url:           string;
    review_count:  number;
    categories:    Category[];
    rating:        number;
    coordinates:   Center;
    transactions:  Transaction[];
    price?:        Price;
    location:      Location;
    phone:         string;
    display_phone: string;
    distance:      number;
}

export interface Category {
    alias: string;
    title: string;
}

export interface Center {
    latitude:  number;
    longitude: number;
}

export interface Location {
    address1:        string;
    address2:        null | string;
    address3:        Address3 | null;
    city:            City;
    zip_code:        string;
    country:         Country;
    state:           State;
    display_address: string[];
}

export enum Address3 {
    Empty = "",
    Shop11 = "Shop 11",
}

export enum City {
    SANFrancisco = "San Francisco",
}

export enum Country {
    Us = "US",
}

export enum State {
    CA = "CA",
}

export enum Price {
    Empty = "$$",
    Fluffy = "$",
    Price = "$$$$",
    Purple = "$$$",
}

export enum Transaction {
    Delivery = "delivery",
    Pickup = "pickup",
    RestaurantReservation = "restaurant_reservation",
}

export interface Region {
    center: Center;
}


//Call api restaurant end