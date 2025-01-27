import Footprint from "./Footprint";

const History = ({ footprints, deleteFootprint }) => {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mt-18 mb-6">
        Footprint History
      </h1>
      <div className="flex flex-col justify-center gap-4">
        {footprints.reverse().map((footprint) => {
          return <Footprint key={footprint.id} footprint={footprint} deleteFootprint={deleteFootprint}/>;
        })}
      </div>
    </div>
  );
};

export default History;
