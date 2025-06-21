import { Link } from "react-router-dom";

const JobCard = ({ job }) => (
  <div className="border p-4 rounded shadow hover:shadow-md bg-white transition flex justify-between items-center">
    {/* Left section: Job info */}
    <div>
      <h3 className="font-bold text-xl">{job.title}</h3>
      <p className="text-sm text-gray-600">{job.company}</p>
      <p className="text-sm">{job.location}</p>
      <span className="inline-block mt-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
        {job.category}
      </span>
    </div>

    {/* Right section: Button */}
    <div className="ml-4">
      <Link
        to={`/jobs/${job._id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View
      </Link>
    </div>
  </div>
);

export default JobCard;
