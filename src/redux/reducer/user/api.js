import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// User Login
export const postLogin = createAsyncThunk(
    'user/postLogin',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://192.168.79.43:3000/api/v1/auth/signin',
                JSON.stringify(payload), {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            );
            const data = response.data;
            return data;
        } catch (error) {
            if (error.response.data) {
                return rejectWithValue(e.response.data.message);
            } else {
                return rejectWithValue('Something went wrong');
            }
        }
    }
);

// Get Profile
export const getProfile = createAsyncThunk(
    'user/getProfile',
    async (token, { rejectWithValue }) => {
        try {
            const response = await axios('http://192.168.79.43:3000/api/v1/auth/whoami', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const { data } = response.data;
            return data;
        } catch (error) {
            if (error.response.data) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue('Something went wrong');
            }
        }
    }
);

