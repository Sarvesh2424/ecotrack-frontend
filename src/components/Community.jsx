import { useState } from "react";
import { PencilSquareIcon, UserGroupIcon, PaperAirplaneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Post from "./Post";

const Community = ({ community, postCommunity }) => {
  const [post, setPost] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  
  const handleSubmit = () => {
    if (post.trim()) {
      postCommunity(post);
      setPost("");
      setIsCreating(false);
    }
  };
  
  return (
    <div className="max-w-5xl mx-auto mt-18 animate-fade-in">
      <div className="flex justify-between items-start gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent mb-8 flex items-center gap-4">
            <UserGroupIcon className="w-12 h-12 text-black" />
            Community Posts
          </h1>

          <div className="space-y-6">
            {Array.isArray(community) && community.length > 0 ? (
              community.map((post) => (
                <Post key={post.id} post={post} />
              ))
            ) : (
              <div className="glass-container p-8 rounded-2xl text-center">
                <UserGroupIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  No Posts Yet
                </h2>
                <p className="text-gray-600">
                  Be the first to share your thoughts with the community!
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="w-80">
          <div className="sticky top-24">
            {!isCreating ? (
              <button
                onClick={() => setIsCreating(true)}
                className="w-full bg-gradient-to-r from-green-600 to-green-400 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-green-700 hover:to-green-500 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <PencilSquareIcon className="w-6 h-6" />
                Create New Post
              </button>
            ) : (
              <div className="glass-container p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold text-gray-800">Create Post</h2>
                  <button
                    onClick={() => setIsCreating(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                
                <textarea
                  value={post}
                  onChange={(e) => setPost(e.target.value)}
                  className="w-full p-4 h-40 text-gray-700 bg-white/50 rounded-xl border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 resize-none"
                  placeholder="Share your thoughts with the community..."
                />
                
                <button
                  onClick={handleSubmit}
                  disabled={!post.trim()}
                  className="w-full bg-gradient-to-r from-green-600 to-green-400 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-green-700 hover:to-green-500 transform transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <PaperAirplaneIcon className="w-5 h-5" />
                  Post
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
