import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    topics: {}
}

export const topicSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action)=>{
           // const { id, name, icon }= action.payload
          
            state.topics[action.payload.id]={
                id:action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            }
          
            
        },
        addQuizId: (state, action) =>{
            const {topicId, quizId}= action.payload
            state.topics[topicId].quizIds.push(quizId)
        }
    }
  
    
})

export const selectTopics = (state)=>
state.topics.topics


export default topicSlice.reducer
export const {addTopic, addQuizId } = topicSlice.actions