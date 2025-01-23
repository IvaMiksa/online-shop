const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 pt-[1.5rem] pb-[1rem]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
   
        <div className="pl-20">
          <h3 className="text-xl font-bold mb-4 text-palevioletred">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-palevioletred transition">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-palevioletred transition">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-palevioletred transition">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-palevioletred transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

      
        <div className="flex justify-center items-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-palevioletred font-bold text-lg mr-2">
              DS
            </div>
            <span className="text-white font-extrabold text-2xl tracking-wide">
              Dream Shop
            </span>
          </div>
        </div>


        <div>
          <h3 className="text-xl font-bold mb-4 text-palevioletred">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm mb-4">
            Get the latest updates and exclusive deals.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l-lg sm:rounded-none sm:rounded-l-lg border-none text-black flex-grow"
            />
            <button
              type="submit"
              className="bg-palevioletred text-white px-4 py-2 rounded-r-lg sm:rounded-none sm:rounded-r-lg hover:bg-palevioletredhover transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>


      <div className="mt-5 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Iva Miksa Dumancic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
