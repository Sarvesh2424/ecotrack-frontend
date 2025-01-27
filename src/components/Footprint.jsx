import { TrashIcon } from "@heroicons/react/24/outline";

const Footprint = ({ footprint, deleteFootprint }) => {
  return (
    <div className="flex p-6 flex-col gap-2 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{footprint.footPrint}</h2>
        <button
          onClick={() => deleteFootprint(footprint.id)}
          className="bg-red-500 p-2 text-white rounded-full hover:bg-red-600 hover:cursor-pointer transition-colors"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
      <p>Date: {new Date(footprint.date).toDateString()}</p>
    </div>
  );
};

export default Footprint;
