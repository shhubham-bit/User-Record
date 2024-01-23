import { createSlice } from "@reduxjs/toolkit";

const recordSlice = createSlice({
    name: 'record',
    initialState: {
        recordList: [],
    },
    reducers: {
        addNewRecord: (state, action) => {
            console.log("reducerbxsj", action)
            state.recordList.push(action.payload)
        },
        updateRecord: (state, action) => {
            const index = action.payload.index
            const data = action.payload.data
            state.recordList[index] = data
        },
        deleteRecord: (state, action) => {
            console.log(action.payload)
            state.recordList.splice(action.payload, 1)
        }
    }
})

export const {addNewRecord, updateRecord, deleteRecord} = recordSlice.actions
export default recordSlice.reducer 