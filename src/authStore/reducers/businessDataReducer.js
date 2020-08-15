const initialState = {
  grossAnnualSales: "5e4",
  annualPayroll: "5e4",
  numEmployees: "",
};

export const businessDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BUSINESS_DATA":
      const newBusinessData = [action.state, ...state];
      return {
        ...state,
        state: newBusinessData,
      };
    default:
      return state;
  }
};
