import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function App() {
  return (
    <div>
      <Article />
      <Comment />
    </div>
  );
}
// returns these DOM elements:
// <div>
//  <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
// </div>
export default App;
