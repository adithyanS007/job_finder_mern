

const Hero = ({ searchTerm, setSearchTerm }) => (
  <section className="text-center p-20 pt-[10rem] bg-blue-50">
    <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
    <p className="text-lg mb-4">Search by job title or company</p>
    
    {/* Search input field */}
    <input
      type="text"
      placeholder="Search jobs..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="p-2 border rounded w-1/2"
    />
  </section>
);

export default Hero;
