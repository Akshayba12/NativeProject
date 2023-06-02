export const Increament = amount => {
  return {
    type: 'INCREMENT',
    payload: amount,
  };
};

export const Decreament = amount => {
  return {
    type: 'DECREMENT',
    payload: amount,
  };
};
