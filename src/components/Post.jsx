import { UserCircleIcon } from "@heroicons/react/24/outline";

const Post = ({ post }) => {
  return (
    <div className="flex flex-col w-120 bg-white rounded-xl shadow-2xl">
      <div className="p-4 flex justify-between">
        <div className="text-lg flex items-center gap-2 font-semibold">
            <UserCircleIcon className="w-5 h-5" /> {post.name}
        </div>
        <div className="text-sm">{new Date(post.date).toDateString()}</div>
      </div>
      <div className="p-6">{post.post}</div>
    </div>
  );
};

export default Post;
