export const getSpaces = (reduxState) => reduxState.homePage.spaces;
export const getLoading = (reduxState) => reduxState.homePage.loading;
export const getDetails = (reduxState) => reduxState.homePage.details;
export const sortedStories = (reduxState) => {
  const clonedArray = [...reduxState.homePage.details.stories];
  console.log("stories", clonedArray);
  return clonedArray.sort((a, b) => b.createdAt - a.createdAt);
};
