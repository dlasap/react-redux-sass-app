import reactRedux from "react-redux";

const initialState = {
  posts: [
    {
      id: 1,
      name: "dom",
    },
  ],
};

const rootReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "ADD_POST":
      const new_data = [...state.posts, action.data];

      const new_state = {
        ...state,
        posts: new_data,
      };
      return new_state;
    default:
      return state;
  }
};

export default rootReducer;
