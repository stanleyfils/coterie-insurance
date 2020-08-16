const initialState = {
  businessName: "",
  contactEmail: "",
  industryId: "10537",
  locations: [
    {
      zip: "",
    },
  ],
};

export const businessDetailsReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD_BUSINESS_DETAILS":
      const newBusinessDetails = [action.state, ...state];
      return {
        ...state,
        state: newBusinessDetails,
      };
    case "STORE_BUSINESS_DETAILS":
      console.log(action);
      return {
        businessDetailsData: action.data,
      };
    default:
      return state;
  }
};
