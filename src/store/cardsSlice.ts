import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemProps } from '../components/Item/Item.types';

export interface StateType {
  list: ItemProps[];
}

const initialState: StateType = {
  list: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    saveList: (state, action: PayloadAction<ItemProps[]>) => {
      state.list = action.payload;
    },
    clearList: state => {
      state.list = [];
    },
    removeFromList: (state, action: PayloadAction<number>) => {
      const filteredList = state.list.filter(el => el.id !== action.payload);
      state.list = filteredList;
    },
  },
});

export const { clearList, saveList, removeFromList } = cardsSlice.actions;

export default cardsSlice.reducer;
