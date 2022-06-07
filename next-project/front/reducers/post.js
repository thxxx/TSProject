import uuid from "react-uuid";

export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: " 첫 번째 게시글 #해시태그 #쿠쿠",
      Images: [
        {
          src:
            "https://imgnews.pstatic.net/image/076/2022/05/25/2022052601002069400139271_20220525161103688.jpg?type=w647",
        },
        {
          src:
            "https://imgnews.pstatic.net/image/421/2022/05/25/0006116775_001_20220525152301703.jpg?type=w647",
        },
        {
          src:
            "https://imgnews.pstatic.net/image/421/2022/05/25/0006116775_002_20220525152301876.jpg?type=w647",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "콘테의 백쓰리전술",
        },
        {
          User: {
            nickname: "SON7",
          },
          content: "손흥민 귀국",
        },
        {
          User: {
            nickname: "ㄴNOS",
          },
          content: "23골 을 넣었습 니다!!",
        },
      ],
    },
  ],
  imagPaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: false,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: false,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data: data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data: data,
});

const dummyPost = (data) => ({
  id: uuid(),
  content: data,
  User: {
    id: 1,
    nickname: "김호진",
  },
  Images: [],
  Comments: [],
});
const dummyComment = (data) => ({
  User: {
    nickname: "nero",
  },
  content: data,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      console.log("이건?");
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
        addPostError: null,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(
        (v) => v.id === action.data.postId
      );

      const post = state.mainPosts[postIndex];

      post.Comments = [dummyComment(action.data.content), ...post.Comments];

      const mainPosts = [...state.mainPosts];

      mainPosts[postIndex] = post;

      console.log(mainPosts);

      return {
        ...state,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true,
        addCommentError: null,
      };
    }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
