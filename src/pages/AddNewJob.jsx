import JobForm from "../components/JobForm";
import { FaPlus } from "react-icons/fa";

const AddNewJob = () => {
  return (
    <div className="container-custom mx-auto px-4 py-20">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
        <div className="mb-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-2 text-blue-600">
            <FaPlus size={22} />
            <h1 className="text-3xl font-bold">Post a New Job</h1>
          </div>
          <p className="text-gray-600 text-sm">
            Fill out the form below to create a new job listing on the platform.
          </p>
        </div>

        <JobForm />
      </div>
    </div>
  );
};

export default AddNewJob;
