import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";

const JobList = ({ searchTerm }) => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
  axios.get("http://localhost:5000/jobs")
    .then((res) => {
      setJobs(res.data.data); 
    })
    .catch((err) => {
      console.error("Error fetching jobs:", err);
      setJobs([]); // Optional fallback
    });
}, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesCategory = filter ? job.category === filter : true;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mt-10">
      <div className="mb-4">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          <option value="Design">Design</option>
          <option value="Development">Development</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
