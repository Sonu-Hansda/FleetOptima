import React, { useState, useEffect } from "react";
import LegalHeader from "../components/LegalHeader";
import LegalFooter from "../components/LegalFooter";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [patentName, setPatentName] = useState("");
  const [inventor, setInventor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [country, setCountry] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredPatents, setFilteredPatents] = useState([]);

  const patents = [
    {
      id: 1,
      title: "Quantum Computing Stabilization Method",
      inventor: "Dr. Sarah Johnson",
      inventorImage:
        "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20female%20scientist%20with%20glasses%20and%20lab%20coat%2C%20neutral%20background%2C%20professional%20portrait%2C%20high%20quality%2C%20realistic%2C%20detailed%20facial%20features&width=100&height=100&seq=1&orientation=squarish",
      filingNumber: "US10284562B2",
      email: "s.johnson@institute.edu",
      phone: "+1 (555) 123-4567",
      abstract:
        "A novel method for stabilizing quantum bits through environmental noise reduction and error correction, enabling longer coherence times in quantum computing systems.",
      filingDate: "2023-05-12",
      status: "Granted",
      hasAward: true,
      country: "United States",
    },
    {
      id: 2,
      title: "Advanced Neural Network Architecture",
      inventor: "Prof. Michael Chen",
      inventorImage:
        "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20asian%20male%20professor%20with%20glasses%2C%20neutral%20background%2C%20professional%20portrait%2C%20high%20quality%2C%20realistic%2C%20detailed%20facial%20features&width=100&height=100&seq=2&orientation=squarish",
      filingNumber: "EP3576291A1",
      email: "m.chen@institute.edu",
      phone: "+1 (555) 987-6543",
      abstract:
        "A scalable neural network architecture that significantly reduces computational requirements while maintaining accuracy for complex machine learning tasks.",
      filingDate: "2023-08-23",
      status: "Pending",
      hasAward: false,
      country: "European Union",
    },
    {
      id: 3,
      title: "Biodegradable Smart Materials",
      inventor: "Dr. Emily Rodriguez",
      inventorImage:
        "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20latina%20female%20researcher%20with%20long%20dark%20hair%2C%20neutral%20background%2C%20professional%20portrait%2C%20high%20quality%2C%20realistic%2C%20detailed%20facial%20features&width=100&height=100&seq=3&orientation=squarish",
      filingNumber: "JP2021034567A",
      email: "e.rodriguez@institute.edu",
      phone: "+1 (555) 234-5678",
      abstract:
        "Environmentally friendly smart materials that respond to specific stimuli and fully degrade within controlled timeframes, applicable to medical implants and sustainable packaging.",
      filingDate: "2023-02-15",
      status: "Granted",
      hasAward: true,
      country: "Japan",
    },
    {
      id: 4,
      title: "Renewable Energy Storage Solution",
      inventor: "Dr. James Wilson",
      inventorImage:
        "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20middle%20aged%20male%20scientist%20with%20short%20beard%2C%20neutral%20background%2C%20professional%20portrait%2C%20high%20quality%2C%20realistic%2C%20detailed%20facial%20features&width=100&height=100&seq=4&orientation=squarish",
      filingNumber: "CN112345678A",
      email: "j.wilson@institute.edu",
      phone: "+1 (555) 345-6789",
      abstract:
        "An innovative energy storage system utilizing advanced materials to significantly improve capacity and efficiency for renewable energy applications.",
      filingDate: "2023-11-05",
      status: "Pending",
      hasAward: false,
      country: "China",
    },
    {
      id: 5,
      title: "AI-Driven Medical Diagnostic Tool",
      inventor: "Dr. Lisa Zhang",
      inventorImage:
        "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20asian%20female%20doctor%20with%20stethoscope%2C%20neutral%20background%2C%20professional%20portrait%2C%20high%20quality%2C%20realistic%2C%20detailed%20facial%20features&width=100&height=100&seq=5&orientation=squarish",
      filingNumber: "IN202145678A",
      email: "l.zhang@institute.edu",
      phone: "+1 (555) 456-7890",
      abstract:
        "A machine learning system that analyzes medical imaging data to assist in early detection of various diseases with higher accuracy than traditional methods.",
      filingDate: "2023-07-19",
      status: "Granted",
      hasAward: true,
      country: "India",
    },
    {
      id: 6,
      title: "Secure Blockchain Voting System",
      inventor: "Prof. Robert Taylor",
      inventorImage:
        "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20african%20american%20male%20professor%20with%20glasses%2C%20neutral%20background%2C%20professional%20portrait%2C%20high%20quality%2C%20realistic%2C%20detailed%20facial%20features&width=100&height=100&seq=6&orientation=squarish",
      filingNumber: "GB2021789012A",
      email: "r.taylor@institute.edu",
      phone: "+1 (555) 567-8901",
      abstract:
        "A blockchain-based electronic voting system with enhanced security features to ensure vote integrity, transparency, and voter privacy for democratic processes.",
      filingDate: "2023-09-30",
      status: "Pending",
      hasAward: false,
      country: "United Kingdom",
    },
  ];

  const countries = [
    "United States",
    "European Union",
    "Japan",
    "China",
    "India",
    "United Kingdom",
  ];

  useEffect(() => {
    // Filter patents based on search term and filters
    const filtered = patents.filter((patent) => {
      const matchesSearch =
        searchTerm === "" ||
        patent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patent.inventor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patent.abstract.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPatentName =
        patentName === "" ||
        patent.title.toLowerCase().includes(patentName.toLowerCase());
      const matchesInventor =
        inventor === "" ||
        patent.inventor.toLowerCase().includes(inventor.toLowerCase());
      const matchesDate =
        publicationDate === "" || patent.filingDate === publicationDate;
      const matchesCountry = country === "" || patent.country === country;

      return (
        matchesSearch &&
        matchesPatentName &&
        matchesInventor &&
        matchesDate &&
        matchesCountry
      );
    });

    setFilteredPatents(filtered);
  }, [searchTerm, patentName, inventor, publicationDate, country]);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const clearFilters = () => {
    setPatentName("");
    setInventor("");
    setPublicationDate("");
    setCountry("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <LegalHeader/>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
             PATENT SEARCHING MADE EASY 
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing our commitment to groundbreaking research and innovation.<br></br> 
            This Platfrom helps you find any patent easily.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search patents by title, inventor, or abstract"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Advanced Filters
            </h3>
            <button
              onClick={toggleFilter}
              className="text-green-600 hover:text-green-800 flex items-center rounded whitespace-nowrap"
            >
              {isFilterOpen ? (
                <>
                  <span>Hide Filters</span>
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span>Show Filters</span>
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>

          {isFilterOpen && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Patent Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  value={patentName}
                  onChange={(e) => setPatentName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Application Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  value={inventor}
                  onChange={(e) => setInventor(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Publication Date
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  value={publicationDate}
                  onChange={(e) => setPublicationDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <div className="relative">
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm appearance-none"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">All Countries</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isFilterOpen && (
            <div className="flex justify-end">
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 mr-2 whitespace-nowrap"
              >
                Clear Filters
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 whitespace-nowrap"
              >
                Apply Filters
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPatents.length} of {patents.length} patents
          </p>
        </div>

        {/* Patent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatents.map((patent) => (
            <div
              key={patent.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-green-500 to-yellow-400"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {patent.title}
                </h3>

                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={patent.inventorImage}
                      alt={patent.inventor}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/100";
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      {patent.inventor}
                    </p>
                    <p className="text-sm text-gray-600">
                      {patent.filingNumber}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-600 text-sm mb-1">
                    <svg
                      className="w-4 h-4 inline mr-2 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {patent.email}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <svg
                      className="w-4 h-4 inline mr-2 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {patent.phone}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {patent.abstract}
                  </p>
                  <button className="text-green-600 text-sm mt-1 hover:text-green-800 whitespace-nowrap">
                    Read more
                  </button>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 inline mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Filed: {patent.filingDate}
                  </p>

                  <div className="flex items-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        patent.status === "Granted"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {patent.status}
                    </span>

                    {patent.hasAward && (
                      <span
                        className="ml-2 text-yellow-500"
                        title="Patent Excellence Award"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPatents.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 mx-auto text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No patents found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
      <LegalFooter/>
    </div>
  );
};

export default Search;