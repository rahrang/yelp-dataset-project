export const MainConstants = {
  STORE_DATA: 'STORE_DATA'
};

export const MainActions = {
  storeData: (compliments, years, reviews, users) => ({
    type: 'STORE_DATA',
    compliments,
    years,
    reviews,
    users
  })
};
