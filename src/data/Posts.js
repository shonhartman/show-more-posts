export default function Posts({ postsToRender }) {
  return (
    postsToRender.map((post, index) => {
      return (
        <div key={index} className="relative w-full p-1 md:w-1/2 lg:w-1/3">
          <div className="w-full h-full px-4 pb-6">
            <div className="flex flex-col h-full mb-5 overflow-hidden shadow-xl rounded-xl">
              <div className="flex flex-col flex-grow p-6">
                <h1 className="mb-3 text-2xl font-medium leading-tight text-gray-900">{post.title}</h1>
                <div clasNames="flex-grow mb-5 font-light text-gray-500">{post.body}</div>
              </div>
            </div>
          </div>
        </div>
      );
    })
  ); 
}