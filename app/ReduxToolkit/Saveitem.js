import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const SavedItem = createSlice({
  name: 'Save',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      return state.filter(item => item.id !== itemId);
    },
    clearItems: () => {
      return [];
    },
  },
});

export const {addItem, removeItem, clearItems} = SavedItem.actions;
export default SavedItem.reducer;