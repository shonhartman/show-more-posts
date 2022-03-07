import './App.css';
import posts from './data/postsArray';
import Posts from './data/Posts';
import { useEffect, useState } from 'react';

let arrayForHoldingPosts = [];
const postsPerPage = 3;

function App() {
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedPosts = posts.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Show More Posts
        </p>
        <Posts postsToRender={postsToShow} />
        <button onClick={handleShowMorePosts}>Load More</button>
      </header>
    </div>
  );
}

export default App;
