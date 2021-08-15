import { combineReducers } from 'redux';
import homeReducer from './home.feature';

export default combineReducers({
    home: homeReducer
});