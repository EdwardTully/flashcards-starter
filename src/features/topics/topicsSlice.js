import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    topics: {}
}

export const topicSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action)=>{
            const { id, name, icon }= action.payload
            state.topics[id]={
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        },
        addQuizId: (state, action) =>{
            const {quizId, topicId}= action.payload
            state.topics[topicId].quizIds.push(quizId)
        }
    }
  
    
})

export const selectTopics = (state)=>{
    return state.topics.topics
}

export default topicSlice.reducer
export const {addTopic, addQuizId } = topicSlice.actions