import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";



const initialState = {
    quizzes: {}
}

const quizesSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        addQuiz: (state, action)=>{
        //const {id, name, topicId, cardIds} = action.payload
       
        state.quizzes[action.payload.quizId]= 
            action.payload
        
    }}
})


export const addQuizAndQuizId = (payload)=>{
    
    return (dispatch)=>{
        dispatch(addQuiz(payload))
        const {quizId, topicId}= payload
        dispatch(addQuizId(quizId, topicId))
    }
}
export const selectQuiz = (state)=>

 state.quizzes.quizzes

export const {addQuiz} = quizesSlice.actions
export default quizesSlice.reducer