const initialState = {
  stars: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CLIP':
      return {
        ...state,
        stars: [...state.stars, action.star],
      };
    case 'DELETE_CLIP':
      return {
        ...state,
        stars: state.stars.filter((star) => star.url != action.star.url),
      };
    default:
      return state;
  }
};

export default reducer;
