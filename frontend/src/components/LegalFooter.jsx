const LegalFooter = () => {
   return (
     <div><footer className="px-6 py-12 bg-gray-900 text-white">
     <div className="max-w-6xl mx-auto">
       <div className="flex flex-col md:flex-row justify-between mb-12">
         <div className="mb-8 md:mb-0">
           <div className="flex items-center mb-4">
             <img 
               src="https://readdy.ai/api/search-image?query=A%2520minimalist%2520logo%2520for%2520NyayaBriefly%2520featuring%2520a%2520stylized%2520scale%2520of%2520justice%2520in%2520white%2520with%2520gold%2520accents%252C%2520professional%2520and%2520clean%2520design%2520suitable%2520for%2520a%2520legal%2520tech%2520company%252C%2520simple%2520elegant%2520icon&width=40&height=40&seq=12&orientation=squarish" 
               alt="NyayaBriefly Logo" 
               className="h-8 w-8"
             />
             <span className="ml-2 text-xl font-bold">NyayaBriefly</span>
           </div>
           <p className="text-gray-400 max-w-xs">
             Empowering Indian legal professionals with AI-powered tools for more efficient and effective legal work.
           </p>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
           <div>
             <h4 className="text-lg font-semibold mb-4">Product</h4>
             <ul className="space-y-2">
               <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Features</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Pricing</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Case Studies</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Reviews</a></li>
             </ul>
           </div>

           <div>
             <h4 className="text-lg font-semibold mb-4">Resources</h4>
             <ul className="space-y-2">
               <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Blog</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Help Center</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Guides</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Webinars</a></li>
             </ul>
           </div>

           <div>
             <h4 className="text-lg font-semibold mb-4">Company</h4>
             <ul className="space-y-2">
               <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">About Us</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Careers</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Contact</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</a></li>
             </ul>
           </div>
         </div>
       </div>

       <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
         <p className="text-gray-400 mb-4 md:mb-0">
           © Rishit Raj. All rights reserved.
         </p>
         <div className="flex space-x-6">
           <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
             <span className="text-xl">🐦</span>
           </a>
           <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
             <span className="text-xl">🔗</span>
           </a>
           <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
             <span className="text-xl">📷</span>
           </a>
           <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
             <span className="text-xl">▶️</span>
           </a>
         </div>
       </div>
     </div>
   </footer></div>
   );
 }
 export default LegalFooter;
 