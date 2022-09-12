import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const getProducts = createAsyncThunk('products/getProducts', async (term = "") => {
    if (term === ""){
        let products = await fetch("https://dummyjson.com/products");
        products = await products.json();
        return products.products;
    }else {
        let products = await fetch(`https://dummyjson.com/products/search?q=${term}`);
        products = await products.json();
        return products.products;
    }
});

export const getProductsByCategory = createAsyncThunk('products/getProductsByCategory', async (term) => {
    let products = await fetch(`https://dummyjson.com/products/category/${term}`);
    products = await products.json();
    return products.products;
});

const products = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'pending',
    },
    reducers: {
        clearProducts: (state, action)=> {
            state.products = [];
            state.status = "pending";
        }
    },
    extraReducers: {
        [getProducts.fulfilled]: (state, {payload}) => {
            state.products = payload;
            state.status = 'fulfilled';
        },
        [getProducts.pending]: (state, {payload}) => {
            state.status = 'pending';
        },
        [getProducts.rejected]: (state, {payload}) => {
            state.status = 'rejected';
        },
        [getProductsByCategory.fulfilled]: (state, {payload}) => {
            state.products = payload;
            state.status = 'fulfilled';
        },
        [getProductsByCategory.pending]: (state, {payload}) => {
            state.status = 'pending';
        },
        [getProductsByCategory.rejected]: (state, {payload}) => {
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
// export const selectFilteredProducts = state => {
//     return state.products.filteredProducts;
// }
export const {clearProducts} = products.actions;
export default products.reducer;

