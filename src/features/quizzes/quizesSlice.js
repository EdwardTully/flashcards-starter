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
        const {id, name, topicId, cardIds} = action.payload
        state.quizzes[id]= {
            id: id,
            name: name,
            topicId: topicId,
            cardIds: cardIds,
        }
    }}
})


export const addQuizAndQuizId = (quiz)=>{
    const {quizId, name, topicId, cardIds }= quiz
    return (dispatch)=>{
        dispatch(addQuiz(quiz))
        dispatch(addQuizId({quizId:quizId, topicId:topicId} ))
    }
}
export const selectQuiz = (state)=>{
    return state.quizzes.quizzes
}
export const {addQuiz} = quizesSlice.actions
export default quizesSlice.reducer