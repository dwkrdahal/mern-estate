import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-200 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl felx flex-wrap p-4">
            <span className="text-slate-500">Diwar</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form
          action=""
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search ..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600"></FaSearch>
        </form>

        <ul className="flex gap-4 p-3">
         
          <Link to="/profile">
            <li className="hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer"> Profile </li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer "> About </li>
          </Link>
          
          <Link to="/sign-in">
            <li className="sm:inline text-slate-700 hover:underline hover:cursor-pointer"> Sign In </li>
          </Link>

          
        </ul>
      </div>
    </header>
  );
}

export default Header;
