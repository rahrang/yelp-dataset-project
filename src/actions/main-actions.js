export const MainConstants = {
    STORE_DATA: 'STORE_DATA'
};

export const MainActions = {

    storeData: (compliments, years_to_elite, users_scatter, overall) => ({
        type: 'STORE_DATA',
        compliments,
        years_to_elite,
        users_scatter,
        overall
    })
};