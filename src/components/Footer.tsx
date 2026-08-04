const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-11 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 font-medium">
        <p>
          &copy; {new Date().getFullYear()} UDICTI Tech. All rights reserved.
        </p>
        <p className="mt-2 md:mt-0 flex items-center gap-1">
          Built at the edge of{' '}
          <span className="text-[#0864AF] font-bold">Innovation.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
