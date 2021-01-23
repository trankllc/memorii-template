const INIT_STATE = {
  prefecture: 0,
  district: "",
  train: "",
  searched: false,
  price: 15,
  accessibility: 20,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SELECT_PREFECTURE": {
      return {
        ...state,
        prefecture: action.payload,
      };
    }
    case "SELECT_DISTRICT": {
      return {
        ...state,
        district: action.payload,
      };
    }
    case "SELECT_TRAIN": {
      return {
        ...state,
        train: action.payload,
      };
    }
    case "SET_SEARCHED": {
      return {
        ...state,
        searched: action.payload,
      };
    }
    case "SET_PRICE": {
      return {
        ...state,
        price: action.payload,
      };
    }
    case "SET_ACCESSIBILITY": {
      return {
        ...state,
        accessibility: action.payload,
      };
    }
    default:
      return state;
  }
};
