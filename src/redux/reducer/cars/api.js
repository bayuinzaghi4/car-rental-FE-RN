import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCars = createAsyncThunk(
    'cars/getCars',
    async (token, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://192.168.79.43:3000/api/v1/cars',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const data = response.data;
            return data;
        } catch(error) {
            if(error.response.data){
                return rejectWithValue(error.response.data.message)
            } else{
                return rejectWithValue('Something went wrong');
            }
        }
    }
);