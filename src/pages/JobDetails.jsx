import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/jobs/${id}`)
      .then((res) => setJob(res.data.data))
      .catch((err) => console.error("Job not found:", err));
  }, [id]);

  if (!job) {
    return <div className="text-center p-10 text-lg">Loading job details...</div>;
  }

  return (
    <div className="container-custom mx-auto px-4 py-20">
      <div className="bg-white shadow-md rounded-lg p-8">
        <div className="mb-6 border-b pb-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{job.title}</h1>
          <p className="text-xl text-gray-600">{job.company}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-gray-900 font-semibold">Location</p>
            <p className="text-gray-800">{job.location}</p>
          </div>
          <div>
            <p className="text-gray-900 font-semibold">Category</p>
            <p className="text-gray-800">{job.category}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {job.description}
          </p>
        </div>

        <div className="text-right">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
