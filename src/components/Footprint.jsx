import { TrashIcon, CalendarIcon, ChartBarIcon } from "@heroicons/react/24/outline";

const Footprint = ({ footprint, deleteFootprint }) => {
  return (
    <div className="glass-container p-6 rounded-2xl transition-all duration-300 transform hover:scale-102 hover:shadow-2xl animate-fade-in">
      <div className="flex justify-between items-start">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white">
              <ChartBarIcon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                {footprint.footPrint} kg CO2e
              </h2>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <CalendarIcon className="w-4 h-4" />
                <span>
                  {new Date(footprint.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => deleteFootprint(footprint.id)}
          className="group p-2 rounded-full hover:bg-red-50 transition-all duration-300"
          title="Delete footprint"
        >
          <TrashIcon className="w-5 h-5 text-red-400 group-hover:text-red-500 transition-colors duration-300" />
        </button>
      </div>
    </div>
  );
};

export default Footprint;
