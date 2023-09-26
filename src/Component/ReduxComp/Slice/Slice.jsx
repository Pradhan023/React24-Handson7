import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {name : 'Anish' , age: 24 , course:"Mern" , batch: "EA24"},
    {name : 'SpiderMAn' , age: 25 , course:"Mern" , batch: "EA24"},
    {name : 'Iron' , age: 26 , course:"Mern" , batch: "EA24"},
    {name : 'Thor' , age: 102 , course:"Mern" , batch: "EA24"},
    {name : 'Black Widow' , age: 24 , course:"Mern" , batch: "EA24"}
]
const StudentSlice = createSlice({
    name: "Stud_Data",
    initialState,
    reducers : {
        editStudent : (state,action)=>{
            state[action.payload.index] = action.payload.info;

            // to see the out ---
            // console.log(action.payload.info);
            // console.log(action.payload.index);
            // console.log(action.payload);
        },
        addStudent : (state,action) =>{
            state.push(action.payload);
        }
    }
})
export const {editStudent,addStudent} = StudentSlice.actions;
export default StudentSlice.reducer;