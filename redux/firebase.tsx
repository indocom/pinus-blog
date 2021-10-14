import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FirebaseState {
    logged_in: boolean,
    email: string,
}

let listNames: Array<string> = ["bernard", "simon", "john", "varrene"]

const initialState: FirebaseState = {
    logged_in: false,
    email: "",
}

export const firebaseSlice = createSlice({
  name: 'firebase',
  initialState,
  reducers: {
    log_in: (state, action: PayloadAction<string>) => {
        state.logged_in = true;
        state.email = action.payload;
    },
    log_out: (state) => {
        state.logged_in = false;
        state.email = "";
    }
  },
})

// Action creators are generated for each case reducer function
export const { log_in, log_out } = firebaseSlice.actions

export default firebaseSlice.reducer