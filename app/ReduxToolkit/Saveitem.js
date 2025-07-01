import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const SavedItem = createSlice({
  name: 'Save',
  initialState,
  reducers: {
    addItem: (state, action) => {
    },
    removeItem: (state, action) => {
    },
    clearItems: () => {
      return [];
    },
  },
});

export const {addItem, removeItem, clearItems} = SavedItem.actions;
export default SavedItem.reducer;