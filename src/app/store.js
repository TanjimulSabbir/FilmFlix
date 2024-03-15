import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: { initial: "" },
});

export default store;