import React from "react";
import AppStyles from "./App.module.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import { add } from "./redux/posts";

function App(props: any) {
  const { posts } = useSelector((state: any) => {
    console.log("%c  state:", "color: #0e93e0;background: #aaefe5;", state);
    return state.post;
  });
  const dispatch = useDispatch();
  console.log(posts, "props", props);

  const handleClick = () => {
    const data = {
      id: "2",
      name: "yeyzz",
    };
    dispatch(add(data));
  };

  return (
    <div className={AppStyles.container}>
      <header className={AppStyles.navbar}>
        {JSON.stringify(posts)}
        <button onClick={handleClick}>add post</button>
      </header>

      <main className={AppStyles.content}>content</main>

      <aside className={AppStyles.sidebar}>sidebar</aside>

      <footer className={AppStyles.footer}>footer</footer>
    </div>
  );
}

// const mapStateToProps = (state: any) => {
//   return {
//     posts: state.posts,
//   };
// };

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     addPost: (data: any) => {
//       dispatch({
//         type: "ADD_POST",
//         data,
//       });
//     },
//   };
// };

export default App;
