import './App.css';
import posts from './data/postsArray';
import Posts from './data/Posts';
import { useEffect, useState } from 'react';

let arrayForHoldingPosts = [];
const postsPerPage = 3;

export default function App() {
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
    <div className="container px-5 py-8 mx-auto xl:px-24 flex flex-col items-center">
      <div className="flex flex-wrap mb-12">
        <Posts postsToRender={postsToShow} />
      </div>
      <button
        type="button"
        className="w-1/3 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleShowMorePosts}
      >
        Load More
      </button>
    </div>
  );
}
