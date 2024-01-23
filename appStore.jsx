import { configureStore } from "@reduxjs/toolkit";
import AddRecordReducer from "./reducers/AddRecordReducer";


const appStore = configureStore({
    reducer: {
        record: AddRecordReducer
    }
})
 export default appStore