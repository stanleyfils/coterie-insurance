export const addBusinessData = (businessData) => (dispatch) => {
  dispatch({ type: "ADD_BUSINESS_Data", businessData });
};

const URL =
  "https://api-sandbox.coterieinsurance.com/v1/commercial/applications";

export const fetchBusinessData = () => (dispatch) => {
  fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "/applications/json",
    },
  })
    .then((res) => res.json())
    .then((businessData) => {
      dispatch({ type: "FETCH_BUSINESS_DETAILS", businessData });
    })
    .catch((err) => console.log(err));
};
