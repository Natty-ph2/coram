


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Brand Info */}
        <div>
          
          <h2 className="text-2xl font-bold mb-2">Vera Investment Group</h2>
          <p className="text-gray-400">Investing in the future, today.</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow us</h3>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="md:col-span-1 flex flex-col justify-center items-center sm:items-start">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Vera Investment Group.
          </p>
          <p className="text-sm text-gray-400">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
