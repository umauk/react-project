import { configureStore } from "@reduxjs/toolkit";

import detailsRedux from "./api"






export const ReduxStore=configureStore({
    reducer:{
        userDetails: detailsRedux

    }
})