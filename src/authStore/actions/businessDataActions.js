import axios from "axios";

export const addBusinessData = (businessData) => (dispatch) => {
  dispatch({ type: "ADD_BUSINESS_Data", businessData });
};

const URL =
  "https://api-sandbox.coterieinsurance.com/v1/commercial/applications";

export const fetchBusinessData = (businessData) => (dispatch) => {
  axios
    .post(URL, businessData)
    .then((response) => {
      dispatch({ type: "FETCH_BUSINESS_DATA", response });
    })
    .catch((err) => console.log(err));
};

export const storeBusinessData = (data) => {
  console.log(data);
  return {
    type: "STORE_BUSINESS_DATA",
    data,
  };
};
