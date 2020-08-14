// import { createSlice } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";
// import axios from "axios";
// import { apiCallBegan } from "./api";
// import moment from "moment";

// const slice = createSlice({
//   name: "inputs",
//   initialState: {
//     businessName: "",
//     contactEmail: "",
//     grossAnnualSales: "5e4",
//     annualPayroll: "5e4",
//     numEmployees: "",
//     industryId: "10537",
//     locations: [
//       {
//         zip: "",
//       },
//     ],
//     response: null,
//     loading: false,
//     lastFetch: null,
//   },
//   reducers: {
//     quotesRequested: (quotes, action) => {
//       quotes.loading = true;
//     },

//     quotesReceived: (quotes, action) => {
//       quotes.list = action.payload;
//       quotes.loading = false;
//       quotes.lastFetch = Date.now();
//     },

//     quotesRequestFailed: (quotes, action) => {
//       quotes.loading = false;
//     },

//     quoteAssignedToApplicant: (quotes, action) => {
//       const { id: quoteId, applicantId } = action.payload;
//       const index = quotes.list.findIndex((quote) => quote.id === quoteId);
//       quotes.list[index].applicantId = applicantId;
//     },

//     // command - event
//     quoteAdded: (quotes, action) => {
//       quotes.list.push(action.payload);
//     },
//   },
// });

// export const {
//   quoteAdded,
//   quoteAssignedToApplicant,
//   quotesReceived,
//   quotesRequested,
//   quotesRequestFailed,
// } = slice.actions;
// export default slice.reducer;

// // Action Creators
// const url =
//   "https://api-sandbox.coterieinsurance.com/v1/commercial/applications";

// export const loadQuotes = () => (dispatch, getState) => {
//   const { lastFetch } = getState().entities.quotes;

//   const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
//   if (diffInMinutes < 10) return;

//   return dispatch(
//     apiCallBegan({
//       url,
//       onStart: quotesRequested.type,
//       onSuccess: quotesReceived.type,
//       onError: quotesRequestFailed.type,
//     })
//   );
// };

// export const addQuote = (quote) =>
//   apiCallBegan({
//     url,
//     method: "post",
//     data: quote,
//     onSuccess: quoteAdded.type,
//   });

// export const assignQuoteToApplicant = (applicationId, businessName) =>
//   apiCallBegan({
//     url,
//     method: "patch",
//     data: { businessName },
//     onSuccess: quoteAssignedToApplicant.type,
//   });

// // Selector
// // Memoization
// // bugs => get unresolved bugs from the cache

// export const getQuotesByApplic = (userId) =>
//   createSelector(
//     (state) => state.entities.bugs,
//     (bugs) => bugs.filter((bug) => bug.userId === userId)
//   );
