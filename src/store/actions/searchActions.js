import axios from 'axios';

export const searchBusiness = (searchParam) => {

  // user input search parameters
  const locationSearch = {
    city: searchParam.city,
    // country: searchParam.country
  }
  // `${searchParam.city} ${searchParam.country}`

  return (dispatch, getState) => {
    // make async call to db
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${JSON.stringify(locationSearch)}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      },
      params: {
        limit: 50,
      }
    })
      .then((response) => {
        console.log("response: ", response);
        // update the store - dispatch an action
        const searchItems = {
          property: "searchItems",
          value: response.data.businesses
        }
        dispatch({ type: 'SEARCH_BUSINESS', payload: searchItems })
      })
      .catch((err) => {
        console.log('error: ', err);
      })

  }
}

export const setPropertyValue = (payload) => {
  return {
    type: 'SET_VALUE',
    payload: payload
  }
}