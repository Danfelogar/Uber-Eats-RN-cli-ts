import { PropsFoods } from '../interfaces/interfaces';

type CartAction =
    | { type: 'addToCartaddToCart', payload: PropsFoods }

export interface  PropsStateRedux{
    selectedItems: {
        items: [] | PropsFoods[],
        restaurantName: string,
    },
}

const initialState:PropsStateRedux ={
    selectedItems: {
        items: [],
        restaurantName: '',
    },
}

export const cartReducer = (state = initialState, action: CartAction) => {
    switch(action.type){
        case 'addToCartaddToCart':
            if(action.payload.checkBoxValue){
                console.log('ADD ITEM TO CART')
                return {
                    ...state,
                    selectedItems: {
                        items: [...state.selectedItems.items, action.payload],
                        restaurantName: action.payload.restaurantName,
                    }
                }
            }else{
                console.log('REMOVE ITEM TO CART')
                return{
                    ...state,
                    selectedItems: {
                        items: [...state.selectedItems.items.filter(item => item.title !== action.payload.title)],
                        restaurantName: action.payload.restaurantName,
                    }
                }
            }
        default:
            return state;
    }
}