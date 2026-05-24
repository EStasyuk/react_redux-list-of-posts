/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Comment {
  id: number;
  body: string;
  postId: number;
}

export interface CommentsState {
  items: Comment[];
  loaded: boolean;
  hasError: boolean;
  visible: boolean;
}

const initialState: CommentsState = {
  items: [],
  loaded: false,
  hasError: false,
  visible: true,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state, action: PayloadAction<Comment[]>) {
      state.items = action.payload;
      state.loaded = true;
      state.hasError = false;
    },
    setCommentsError(state) {
      state.hasError = true;
      state.loaded = false;
    },
    setCommentsLoaded(state, action: PayloadAction<boolean>) {
      state.loaded = action.payload;
    },
    toggleVisible(state) {
      state.visible = !state.visible;
    },
    clearComments(state) {
      state.items = [];
      state.loaded = false;
      state.hasError = false;
    },
  },
});

export const {
  setComments,
  setCommentsError,
  setCommentsLoaded,
  toggleVisible,
  clearComments,
} = commentsSlice.actions;

export default commentsSlice.reducer;
