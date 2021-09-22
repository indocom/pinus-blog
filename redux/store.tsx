import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./dummy_counter"
import dummy_names from "./dummy_names";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        names: dummy_names,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch