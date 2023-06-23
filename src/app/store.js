import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice";
import quizesReducer from "../features/quizzes/quizesSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizesReducer
  },
});
