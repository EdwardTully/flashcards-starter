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
       
        state.quizzes[action.payload.id]= {
            id: action.payload.id,
            name: action.payload.name,
            topicId: action.payload.topicId,
            cardIds: action.payload.cardIds,
        }
    }}
})


export const addQuizAndQuizId = (payload)=>{
  
    return (dispatch)=>{
        dispatch(addQuiz(payload))
        dispatch(addQuizId({id:payload.id, topicId:payload.topicId} ))
    }
}
export const selectQuiz = (state)=>

 state.quizzes.quizzes

export const {addQuiz} = quizesSlice.actions
export default quizesSlice.reducer