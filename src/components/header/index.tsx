import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header
      className={`flex justify-between h-[70px] bg-[var(--dark-blue)] text-white items-center p-5 ${
        location.pathname === '/'
          ? 'absolute top-0 left-0 w-full z-50 bg-transparent'
          : ''
      }`}
    >
      <Link to="/" className="font-bold text-2xl">
        TMDB Project
      </Link>

      <nav className="flex gap-3">
        <NavLink
          to={'/favorites'}
          className={`hover:text-[var(--amber)] transition text-2xl`}
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
