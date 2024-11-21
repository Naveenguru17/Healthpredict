import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-blue-950 text-white py-4">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Disease Risk Assessment</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/prediction" className="hover:underline">Prediction</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
