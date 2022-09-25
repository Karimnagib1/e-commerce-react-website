import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/Products/ProductsSlice";
import userReducer from "../features/Login/UserSlice";


const store = configureStore({
    reducer: {
        products: productsReducer,
        user: userReducer
    }
})

export default store;


