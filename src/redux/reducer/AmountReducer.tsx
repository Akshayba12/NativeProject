import {View, Text} from 'react-native';
import React from 'react';

const initialState = {
  amount = 0,
};
const AmountReducer = (state = initialState, {type, payload}) => {
  if (type === 'INCREMENT') {
    return {
      ...state,
      amount: state.amount + payload,
    };
  } else if (type === 'DECREMENT') {
    return {
      ...state,
      amount: state.amount - payload,
    };
  }
  return state;
};

export default AmountReducer;
