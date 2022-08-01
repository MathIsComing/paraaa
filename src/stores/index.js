import { configureStore } from "@reduxjs/toolkit/dist/configureStore";

import basket from "./money.js"
const store = configureStore({

    reducer: {

        basket


    }


})
export default store