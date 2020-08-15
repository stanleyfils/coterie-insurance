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
  switch (action.type) {
    case "ADD_BUSINESS_DETAILS":
      const newBusinessDetails = [action.state, ...state];
      return {
        ...state,
        state: newBusinessDetails,
      };
    default:
      return state;
  }
};
