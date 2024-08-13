import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import httpRequest from '~/utils/httpRequest'


export const loginUser = createAsyncThunk('accounts/loginUser', async ( data, options) => {
  try {            
    const response = await httpRequest.post('login', data, options);
    return response.data      
    } catch (error) {
      console.error('Đã có lỗi gọi api xảy ra:');    
      return Promise.reject(error);
    }        
})


const accountSlice = createSlice({
  name: "accounts",
  initialState: {    
    isLoading: false,
    isLogin: false,
    account: {},
  },
  reducers: {
    //cac ham thuong dung de xu ly cac state
    updateUser(state,user) {      
      state.account = {...user};
      state.isLogin = true
      return state;
    },
    isLogout(state) {      
      state.isLogin = !state.isLogin ;
      return state;
    },
    checkSession(state){
       // console.log('checkSession');
       if(sessionStorage.getItem('token')){
          let token = JSON.parse(sessionStorage.getItem('token'));
          state.account = token;
          state.isLogin = true
       }
    }
  },
  extraReducers: (builder) => {     
    // ket qua tra ve tu cac ham goi api 
    builder.addCase(loginUser.pending,(state, action) => {                 
       state.isLoading = true
    })  
    
    builder.addCase(loginUser.fulfilled,(state, action) => {    
      //console.log('payload:',action.payload);  
      if(action.payload.length === 0){
          state.isLogin = false
        
      }else{        
        state.account = action.payload               
        state.isLogin = true
      }           
      state.isLoading = false      
    })
    
    builder.addCase(loginUser.rejected,(state, action) => {     
        console.log('rejected:',action);                  
        state.isLoading = false
  })  
      
  }
});


// Reducer
 const accountsReducer = accountSlice.reducer;

// Selector
export const accountsSelector = (state) => {
  // lay tat ca cac initialState
  return state.accounts;
};


// lay cac ham reducer
export const { isLogout, updateUser, checkSession } = accountSlice.actions;

export default accountsReducer;
