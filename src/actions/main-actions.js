export const MainConstants = {
    STORE_DATA: 'STORE_DATA'
};

export const MainActions = {

    storeData: (compliments, elite_years, reviews, overall) => ({
        type: 'STORE_DATA',
        compliments,
        elite_years,
        reviews
    })
};