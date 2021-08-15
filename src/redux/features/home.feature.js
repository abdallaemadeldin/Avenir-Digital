import { createAction, createReducer } from '@reduxjs/toolkit';

export const fetchUsers = createAction('users/get');
export const recivedUsers = createAction('users/assign');

const initState = {
    loading: true,
    loadMore: false,
    list: [],
    error: '',
    isRefreshing: false
}

export default createReducer(initState, {
    [recivedUsers]: (state, action) => {
        const list = action.payload.results;
        return {
            ...state,
            loading: false,
            loadMore: false,
            isRefreshing: false,
            list: action.payload.reload ? list : [...state.list, ...list],
            error: action.payload.error
        };
    },
    [fetchUsers]: (state, action) => {
        if (action.payload.reload) return { ...state, isRefreshing: true }
        else if (state.list.length > 0) return { ...state, loadMore: true };
        else return state;
    }
});