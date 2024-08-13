import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './reducers/accountSlice';


const store = configureStore({
reducer: {
    accounts: accountSlice    
},
})
export default store;