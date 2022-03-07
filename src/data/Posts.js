export default function Posts({ postsToRender }) {
  return (
    <ul id='post-list'>
      {
        postsToRender.map((post, index) => {
          return (
            <li key={index}>
              <strong>{post.id}</strong>
              &nbsp;{post.title}
            </li>
          );
        })
      }
    </ul>
  ); 
}