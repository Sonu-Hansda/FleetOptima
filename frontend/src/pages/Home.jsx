import React, { useState } from 'react';
 

const App = () => {
  const [activeTab, setActiveTab] = useState('transit');

  return (
    <>
      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head> */}
      
      <div className="flex min-h-screen bg-[#F9F6F0] font-sans" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {/* Left Sidebar */}
        <div className="w-24 bg-black flex flex-col items-center py-6">
          <div className="text-white font-semibold mb-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>Tracking</div>
          
          <div className="flex flex-col items-center space-y-8 flex-grow">
            <button className="text-white p-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
              <i className="fas fa-th-large text-xl"></i>
            </button>
            
            <button className="text-white p-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
              <i className="fas fa-map-marker-alt text-xl"></i>
            </button>
            
            <button className="bg-[#D3D03F] text-white p-3 rounded-lg cursor-pointer">
              <i className="fas fa-box text-xl"></i>
            </button>
            
            <button className="text-white p-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
              <i className="fas fa-truck text-xl"></i>
            </button>
            
            <button className="text-white p-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
              <i className="fas fa-cog text-xl"></i>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Tracking Header */}
          <div className="bg-[#D3D03F]/90 rounded-xl p-5 relative overflow-hidden mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>#127777489-DL-NY</h2>
                <div className="flex mt-2 space-x-2">
                  <span className="bg-black text-white text-sm px-3 py-1 rounded-full whitespace-nowrap cursor-pointer">Out for Delivery</span>
                  <span className="bg-black/80 text-white text-sm px-3 py-1 rounded-full whitespace-nowrap cursor-pointer">Parcel</span>
                </div>
              </div>
              <button className="text-black p-2 rounded-full hover:bg-black/10 transition cursor-pointer">
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Tracking Timeline */}
            <div className="mt-6 space-y-5">
              <div className="flex items-start">
                <div className="relative mr-3">
                  <div className="w-4 h-4 bg-white border-2 border-[#D3D03F] rounded-full"></div>
                  <div className="absolute top-4 left-1.5 w-0.5 h-12 bg-gray-300"></div>
                </div>
                <div>
                  <p className="font-medium">Package has left Courier Facility</p>
                  <p className="text-sm text-gray-600">SAN FRANCISCO, CALIFORNIA</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="relative mr-3">
                  <div className="w-4 h-4 bg-white border-2 border-[#D3D03F] rounded-full"></div>
                  <div className="absolute top-4 left-1.5 w-0.5 h-12 bg-gray-300"></div>
                </div>
                <div>
                  <p className="font-medium">Package arrived at Local Facility</p>
                  <p className="text-sm text-gray-600">NEW YORK CITY, NEW YORK</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="relative mr-3">
                  <div className="w-4 h-4 bg-[#D3D03F] rounded-full"></div>
                  <div className="absolute top-4 left-1.5 w-0.5 h-12 bg-gray-300"></div>
                </div>
                <div>
                  <p className="font-medium">Out for Delivery</p>
                  <p className="text-sm text-gray-600">NEW YORK CITY, NEW YORK</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="relative mr-3">
                  <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium">Delivered</p>
                  <p className="text-sm text-gray-600">1567 DOVE STREET, NEW YORK CITY, 9886</p>
                </div>
              </div>
            </div>
          </div>

          {/* Truck Image and Info */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex-1">
              <div className="bg-white rounded-xl p-4 shadow-sm h-full">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20white%20delivery%20truck%20with%20sleek%20design%2C%20clean%20white%20cargo%20container%2C%20front%20view%2C%20professional%20transportation%20vehicle%20on%20transparent%20background%2C%20high%20quality%203D%20render%2C%20product%20photography&width=600&height=300&seq=1&orientation=landscape" 
                  alt="Volkswagen Transporter" 
                  className="w-full h-48 object-contain"
                />
                <div className="text-center mt-2">
                  <h3 className="font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>Volkswagen Transporter</h3>
                  <div className="flex justify-end mt-2">
                    <button className="text-[#D3D03F] text-sm font-medium whitespace-nowrap cursor-pointer">
                      View Documents
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <div className="border-2 border-black rounded-lg px-4 py-2 inline-block">
                    <p className="text-center font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>XYZ - 123</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>101</h2>
                <div className="flex items-center">
                  <span className="text-gray-500">kg</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Payload</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>123</h2>
                <div className="flex items-center">
                  <span className="text-gray-500">in³</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Volume</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>51</h2>
                <div className="flex items-center">
                  <span className="text-gray-500">km</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Distance</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>90</h2>
                <div className="flex items-center">
                  <span className="text-gray-500">Mins</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Estimated Time</p>
              </div>
            </div>
          </div>

          {/* Tracking Tabs */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>#127777489-DL-NY</h2>
            
            <div className="flex space-x-4 border-b pb-3">
              <button 
                className={`px-4 py-2 font-medium whitespace-nowrap cursor-pointer ${activeTab === 'transit' ? 'text-[#D3D03F]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('transit')}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                In Transit
              </button>
              <button 
                className={`px-4 py-2 font-medium whitespace-nowrap cursor-pointer ${activeTab === 'documents' ? 'text-[#D3D03F]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('documents')}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Documents
              </button>
            </div>
            
            <div className="mt-4">
              <div className="flex items-start">
                <div className="relative mr-3">
                  <div className="w-4 h-4 bg-[#D3D03F] rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium">Package has left Courier Facility</p>
                  <p className="text-sm text-gray-600">DETROIT, DENMARK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Customs Section */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>#127777489-DL-NY</h2>
            
            <div className="flex space-x-4 border-b pb-3">
              <button className="px-4 py-2 font-medium text-[#D3D03F] whitespace-nowrap cursor-pointer" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                In Customs
              </button>
              <button className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap cursor-pointer" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Parcel
              </button>
            </div>
            
            <div className="mt-4">
              <div className="flex items-start">
                <div className="relative mr-3">
                  <div className="w-4 h-4 bg-[#D3D03F] rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium">Customs</p>
                  <p className="text-sm text-gray-600">NEW YORK CITY, NEW YORK</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Map and Driver Info */}
        <div className="w-96 p-6">
          {/* Map View */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-6 h-[500px] relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Detailed%20city%20map%20of%20San%20Francisco%20with%20streets%2C%20landmarks%2C%20and%20navigation%20route%20shown%20with%20blue%20line%2C%20satellite%20view%20style%20map%20with%20clear%20street%20names%20and%20highway%20markers&width=400&height=500&seq=2&orientation=portrait" 
              alt="Delivery Route Map" 
              className="w-full h-full object-cover"
            />
            
            {/* Zoom Controls */}
            <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
              <button className="bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center cursor-pointer">
                <i className="fas fa-plus text-gray-700"></i>
              </button>
              <button className="bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center cursor-pointer">
                <i className="fas fa-minus text-gray-700"></i>
              </button>
            </div>
          </div>

          {/* Driver Info Card */}
          <div className="relative mt-10">
            <div className="absolute -top-16 left-6 bg-[#D3D03F] rounded-xl p-4 shadow-md w-3/4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-3">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20delivery%20driver%2C%20male%2C%20wearing%20uniform%2C%20friendly%20smile%2C%20neutral%20background%2C%20high%20quality%20portrait%20photo&width=100&height=100&seq=3&orientation=squarish" 
                    alt="Driver" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-medium">Driver</p>
                  <p className="text-xs">ID: 222-111-33</p>
                  <p className="font-bold text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>Matthew Perry</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 text-white rounded-xl p-4 pt-16 shadow-sm">
              <div className="mb-4">
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Address</h3>
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                  <p className="text-sm">Houston Lane, Lan 9, 22/1</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Delivery</h3>
                <div className="flex items-start">
                  <i className="far fa-calendar-alt mt-1 mr-2"></i>
                  <p className="text-sm">12:30 PM<br />31 Jan</p>
                </div>
              </div>
              
              <button 
                className="bg-[#D3D03F] text-black w-full py-2 rounded-full flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <i className="fas fa-phone-alt"></i>
                <span>Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;