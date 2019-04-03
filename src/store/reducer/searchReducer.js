const initState = {
  searchItems: [],
  searchParams: {
    city: "Madrid",
    country: "ES",
  }
};

const searchReducer = (state = initState, action) => {

  // set value to any property in the state
  if (action.type === "SET_VALUE") {
    const property = action.payload.property;
    const value = action.payload.value;
    return {
      ...state,
      [property]: value
    }
  }

  // SEARCH_BUSINESS
  if (action.type === "SEARCH_BUSINESS") {
    const property = action.payload.property;
    const value = action.payload.value;
    return {
      ...state,
      [property]: value
    }
  }

  return state;
}

export default searchReducer;