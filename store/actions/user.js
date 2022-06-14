export const addStar = ({ star }) => {
  return {
    type: 'ADD_CLIP',
    star,
  };
};

export const deleteStar = ({ star }) => {
  return {
    type: 'DELETE_CLIP',
    star,
  };
};
