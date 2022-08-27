import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const getProducts = createAsyncThunk('products/getProducts', async () => {
    let products = await fetch("https://dummyjson.com/products");
    products = await products.json();
    return products.products;
});

const products = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'pending',
        filteredProducts: []
    },
    reducers: {
        setFilteredProducts: (state, action) => {
            state.filteredProducts = action.payload;
        }
    },
    extraReducers: {
        [getProducts.fulfilled]: (state, {payload}) => {
            state.products = payload;
            state.status = 'fulfilled';
            state.filteredProducts = payload;
        },
        [getProducts.pending]: (state, {payload}) => {
            state.status = 'pending';
        },
        [getProducts.rejected]: (state, {payload}) => {
            state.status = 'rejected';
        }
    }
})

export const selectProducts = state => {
    return state.products.products;

}

export const selectProductsStatus = state => {
    return state.products.status;
}
export const selectFilteredProducts = state => {
    return state.products.filteredProducts;
}
export const {setFilteredProducts} = products.actions;
export default products.reducer;

