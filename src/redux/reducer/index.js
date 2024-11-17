import { combineReducers } from '@reduxjs/toolkit';
import carsSlice from './cars';


const rootReducer = combineReducers({
    cars: carsSlice
})

export default rootReducer;
