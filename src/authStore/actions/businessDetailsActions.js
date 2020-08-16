export const addBusinessDetails = (businessDetails) => (dispatch) => {
  dispatch({ type: "ADD_BUSINESS_DETAILS", businessDetails });
};

const URL =
  "https://api-sandbox.coterieinsurance.com/v1/commercial/applications";

export const fetchBusinessDetails = () => (dispatch) => {
  fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "/applications/json",
    },
  })
    .then((res) => res.json())
    .then((businessDetails) => {
      dispatch({ type: "FETCH_BUSINESS_DETAILS", businessDetails });
    })
    .catch((err) => console.log(err));
};

export const storeBusinessDetails = (data) => {
  console.log(data);
  return {
    type: "STORE_BUSINESS_DETAILS",
    data,
  };
};
