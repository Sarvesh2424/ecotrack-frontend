import { ClockIcon } from "@heroicons/react/24/outline";
import Footprint from "./Footprint";

const History = ({ footprints, deleteFootprint }) => {
  const copy = footprints.slice().reverse();
  
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent mb-8 mt-18 flex items-center justify-center gap-4">
        <ClockIcon className="w-12 h-12 text-black" />
        Footprint History
      </h1>

      <div className="space-y-4">
        {(!footprints || footprints.length === 0) ? (
          <div className="glass-container p-8 rounded-2xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <ClockIcon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              No Footprints Yet
            </h2>
            <p className="text-gray-600">
              Start tracking your carbon footprint to see your history here.
              Use the calculator to measure your daily impact!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {copy.map((footprint) => (
              <Footprint
                key={footprint.id}
                footprint={footprint}
                deleteFootprint={deleteFootprint}
              />
            ))}
            
            <div className="text-center mt-6 text-sm text-gray-500">
              Showing {copy.length} footprint{copy.length !== 1 ? 's' : ''}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
