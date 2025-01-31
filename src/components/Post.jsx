import { UserCircleIcon, ClockIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

const Post = ({ post }) => {
  return (
    <div className="glass-container w-120 rounded-2xl transition-all duration-300 transform hover:scale-102 hover:shadow-2xl animate-fade-in">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white">
              <UserCircleIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{post.name}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <ClockIcon className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-700 leading-relaxed">
          {post.post.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-3">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {new Date(post.date).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: '2-digit',
              hour12: true
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
