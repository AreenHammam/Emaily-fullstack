import axios from 'axios';
import {createAction} from "@reduxjs/toolkit";
import {FETCH_USER} from "./types";

const fetchUser = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/current_user');
        dispatch({
            type: FETCH_USER,
            payload: {res},
        })
    }

}

export const fetchUserAction = createAction(FETCH_USER, async () => {
    const res = await axios.get('/api/current_user');

    return {res}
})
