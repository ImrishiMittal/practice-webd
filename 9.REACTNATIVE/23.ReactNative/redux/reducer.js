import {ADD_TO_CART, REMOVE_FROM_CART} from './action';
const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.data);
    default:
      return state;
  }
};
export default reducer;
