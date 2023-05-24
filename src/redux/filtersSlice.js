import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setContactsFilter(state, action) {
      return state.contacts.filter(({ name }) =>
        name.toLowerCase().includes(state.filter.toLowerCase())
      );
    },
  },
});

export const { setContactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
