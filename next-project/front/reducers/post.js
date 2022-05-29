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
  postAdded: false,
};

const ADD_POST = "ADD_POST";

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "김호진",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
