const LegalHeader = () => {
    return (
      <div>
        <header className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center">
          <div className="flex items-center mr-2">
            <img 
              src="https://readdy.ai/api/search-image?query=A%2520minimalist%2520logo%2520for%2520NyayaBriefly%2520featuring%2520a%2520stylized%2520scale%2520of%2520justice%2520in%2520dark%2520green%2520with%2520gold%2520accents%252C%2520professional%2520and%2520clean%2520design%2520suitable%2520for%2520a%2520legal%2520tech%2520company%252C%2520simple%2520elegant%2520icon&width=40&height=40&seq=1&orientation=squarish" 
              alt="NyayaBriefly Logo" 
              className="h-8 w-8"
            />
            <span className="ml-2 text-xl font-bold text-green-800"><a href="/">Nyaya</a></span>
          </div>
          <div className="ml-2 text-xs text-gray-600 flex flex-col">
            {/* <span className="font-semibold">BACKED BY</span>
            <span>GOOGLE FOR STARTUPS</span> */}
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {/* <a href="#pricing" className="text-gray-700 hover:text-green-800">Pricing</a> */}
          <a href="https://iprsearch.ipindia.gov.in/publicsearch" className="text-gray-700 hover:text-green-800">Resource Library</a>
          <a href="https://rishitraj.tech" className="text-gray-700 hover:text-green-800">Contact</a>
        </nav>
        
         
      </header> </div>
    );
  }
  export default LegalHeader;