import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NamesState {
  index: number,
  name: string
}

let listNames: Array<string> = ["bernard", "simon", "john", "varrene"]

const initialState: NamesState = {
  index: 0,
  name: "bernard",
}

export const nameSlice = createSlice({
  name: 'names',
  initialState,
  reducers: {
    nextName: (state) => {
        state.index = state.index + 1 >= listNames.length ? 0 : state.index + 1;
        state.name = listNames[state.index]
    },
  },
})

// Action creators are generated for each case reducer function
export const { nextName } = nameSlice.actions

export default nameSlice.reducer