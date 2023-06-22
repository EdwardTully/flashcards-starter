import { configureStore } from "@reduxjs/toolkit";
import topicsSlice from "../features/topics/topicsSlice";
import quizesSlice from "../features/quizzes/quizesSlice";

export default configureStore({
  reducer: {
    topics: topicsSlice,
    quizzes: quizesSlice
  },
});
