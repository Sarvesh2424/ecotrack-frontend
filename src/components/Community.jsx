import { useState } from "react";
import Post from "./Post";

const Community = ({ community, postCommunity }) => {
  const [post, setPost] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  
  return (
    <div className="mt-18 flex">
      <div className="w-2/3">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Community Posts
        </h1>
        <div className="flex flex-col gap-4">
          {Array.isArray(community) && community.length > 0 ? (
            community.map((post) => (
              <Post key={post.id} post={post} />
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
      <div>
        <button
          onClick={() => setIsCreating(true)}
          className="bg-black text-white p-6 text-lg rounded-xl hover:cursor-pointer hover:bg-gray-800 transition-colors"
        >
          Create new!
        </button>
        {isCreating && (
          <div className="mt-4">
            <textarea
              id="postInput"
              type="text"
              onChange={(e) => setPost(e.target.value)}
              className="mt-1 p-2 h-50 text-gray-700 bg-gray-100 block w-100 rounded-md border-b-2 border-black"
              placeholder="Type your post here..."
            />
            <button
              onClick={() => {
                postCommunity(post);
                setIsCreating(false);
              }}
              className="p-2 bg-black rounded-lg text-white mt-4 w-20 hover:cursor-pointer hover:bg-grey-800"
            >
              Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;