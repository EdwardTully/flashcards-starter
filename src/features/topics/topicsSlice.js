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
           console.log(action.payload.id)
            state.topics[action.payload.id]={
                id:action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            }
            console.log(state.topics)
            
        },
        addQuizId: (state, action) =>{
           const {id, topicId}= action.payload
          
            state.topics[topicId].quizIds.push(id)
        }
    }
  
    
})

export const selectTopics = (state)=>
state.topics.topics


export default topicSlice.reducer
export const {addTopic, addQuizId } = topicSlice.actions