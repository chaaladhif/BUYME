import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        loadProducts: (state, action) => action.payload,
    },
});

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const itemExists = state.find(
                (item) => item.id === action.payload.id
            );
            if (itemExists) {
                itemExists.quantity++;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) =>
            state.filter((product) => product.id !== action.payload.id),
        increaseQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
    },
});

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        addToFavorites: (state, action) => [...state, action.payload],
        removeFromFavorites: (state, action) =>
            state.filter((product) => product.id !== action.payload.id),
    },
});

export const { loadProducts } = productsSlice.actions;
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
    cartSlice.actions;
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
        favorites: favoritesSlice.reducer,
    },
});

export default store;
