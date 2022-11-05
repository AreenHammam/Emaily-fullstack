import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchCurrentUser, stripeTokenAPI} from '../Api/api';

export const fetchUser = createAsyncThunk(
    'fetch_user',
    async () => {
        console.log('fetchUser:  i am in createAsyncThunk')
        const res = await fetchCurrentUser();
        console.log('fetchUser: res', res)
        return res.data;

    });

export const updateToken = createAsyncThunk(
    'update_token',
    async (token) => {
        console.log('handleStripeToken', {token});
        const res = await stripeTokenAPI(token);
        console.log({res})
        return res.data;
    }
)
const initialState = {
    authUser: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        action1: (state, action) => {
            console.log({state, action})
            state.authUser = null;

        }

    },
    extraReducers: {
        [fetchUser.pending]: (state, action) => {
            console.log('fulfilled', {state, action})
            state.authUser = null;


        },
        [fetchUser.fulfilled]: (state, action) => {
            console.log('fulfilled', {state, action})
            state.authUser = action.payload || false;


        },
        [fetchUser.rejected]: (state, action) => {
            console.log('rejected', {state, action})
            state.authUser = null;
        },
        [updateToken.fulfilled]: (state, action) => {
            console.log(action)
            state.authUser = action.payload || false;

        },
        [updateToken.rejected]: (state, action) => {
            state.authUser = null;

        },
        [updateToken.pending]: (state, action) => {
            state.authUser = null;

        },
    }
});


// Extract the action creators object and the reducer
const {actions, reducer} = authSlice
// Extract and export each action creator by name
export const {action1} = actions
// Export the reducer, either as a default or named export
export default reducer;
