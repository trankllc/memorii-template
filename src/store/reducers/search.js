const INIT_STATE = {
  prefecture: 0,
  district: "",
  train: "",
  searched: false,
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
    default:
      return state;
  }
};
