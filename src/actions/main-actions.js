export const MainConstants = {
    STORE_DATA: 'STORE_DATA'
};

export const MainActions = {

    storeData: (data, compliments) => ({
        type: 'STORE_DATA',
        data,
        compliments
    })
};