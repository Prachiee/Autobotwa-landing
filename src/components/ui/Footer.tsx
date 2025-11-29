export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20 py-8 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} TaskFlow. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

      </div>
    </footer>
  );
}
