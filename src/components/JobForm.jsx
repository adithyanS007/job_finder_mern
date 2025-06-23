import { useState } from "react";
import axios from "axios";

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    category: "",
    location: "",
    description: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://job-finder-mern-server.vercel.app/jobs", formData);
    alert("Job posted successfully!");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded p-6 mb-10">
      <h2 className="text-xl font-bold mb-4">Post a New Job</h2>
      <input
        type="text"
        name="title"
        placeholder="Job Title"
        onChange={handleChange}
        required
        className="w-full p-2 border mb-3 rounded"
      />
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        onChange={handleChange}
        required
        className="w-full p-2 border mb-3 rounded"
      />
      <select
        name="category"
        onChange={handleChange}
        required
        className="w-full p-2 border mb-3 rounded"
      >
        <option value="">Select Category</option>
        <option value="Design">Design</option>
        <option value="Development">Development</option>
        <option value="Marketing">Marketing</option>
      </select>
      <input
        type="text"
        name="location"
        placeholder="Location"
        onChange={handleChange}
        required
        className="w-full p-2 border mb-3 rounded"
      />
      <textarea
        name="description"
        placeholder="Job Description"
        onChange={handleChange}
        rows={5}
        required
        className="w-full p-2 border mb-3 rounded"
      />
      <button
        type="submit"
        className="w-[100%] block mx-auto mt-4  bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Submit
      </button>
    </form>
  );
};

export default JobForm;
